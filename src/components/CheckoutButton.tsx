'use client';

import { loadStripe, Stripe } from '@stripe/stripe-js';
import { FC } from 'react';
import { Button } from './ui/button';

const stripePromise: Promise<Stripe | null> = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

interface CheckoutButtonProps {
  items: { name: string; price: number; quantity: number }[];
}

const CheckoutButton: FC<CheckoutButtonProps> = ({ items }) => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    if (!stripe) {
      console.error('Stripe.js failed to load.');
      return;
    }

    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    });

    if (!response.ok) {
      console.error('Failed to create checkout session');
      return;
    }

    const { sessionId } = await response.json();
    await stripe.redirectToCheckout({ sessionId });
  };

  return (
    <Button onClick={handleCheckout} className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
      Checkout
    </Button>
  );
};

export default CheckoutButton;
