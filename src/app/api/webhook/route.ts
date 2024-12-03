import { Buffer } from 'node:buffer';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: "2024-11-20.acacia",
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || '';
  const sig = req.headers.get('stripe-signature') || '';

  let event: Stripe.Event | null = null; // Initialize with null

  try {
    const rawBody = await req.arrayBuffer();
    event = stripe.webhooks.constructEvent(Buffer.from(rawBody), sig, endpointSecret);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return new NextResponse(`Webhook error: ${err.message}`, { status: 400 });
    }
  }

  if (!event) {
    return new NextResponse('Event not processed', { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      console.log('PaymentIntent succeeded:', event.data.object);
      break;
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
}
