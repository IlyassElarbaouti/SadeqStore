"use client";
import { SignInButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/Spinner";
import EventCard from "@/components/ProductCard";
import CheckoutButton from "./CheckoutButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";
import { PortableText } from "next-sanity";
import { urlForImage } from "@/sanity/schemas/sanity-utils";
import Link from "next/link";
import { Product } from "@/types";
import { TypedObject } from "sanity";

export default function ProductContent({
  id,
  product,
}: {
  id: string;
  product: Product;
}) {
  const { user } = useUser();

  console.log(product);
  const { image, name, description, variations, deliveryInstructions } =
    product;
  const [selectedVariant, setSelectedVariant] = useState(
    variations?.filter((variation) => variation.isDefault)[0]
  );
  const handleSelectChange = (e: string) => {
    setSelectedVariant(
      variations.filter((variation) => variation.name === e)[0]
    );
  };
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {image && (
            <div className="aspect-[21/9] relative w-full">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Event Details */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {name}
                  </h1>
                  {/* <p className="text-lg text-gray-600">{description}</p> */}
                </div>

                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Select your variant:
                </h3>
                <Select
                  onValueChange={(e) => handleSelectChange(e)}
                  value={selectedVariant.name}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Variants" />
                  </SelectTrigger>
                  <SelectContent defaultValue={selectedVariant?.name}>
                    {variations?.map((variation) => (
                      <SelectItem key={variation?.name} value={variation?.name}>
                        {variation?.name} - {variation?.price}$
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Additional Event Information */}
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Delivery instructions
                  </h3>
                  <PortableText
                    components={{
                      types: {
                        image: ({ value }) => {
                          // we need to get the image source url, and since @sanity/image-url will give us optimised images for each instance we use it
                          const imgUrl = urlForImage(value.asset).url();
                          return (
                            <div className=" grid min-h-[140px] w-full place-items-center overflow-hidden rounded-lg p-6 ">
                              <Image
                                width={2000}
                                height={2000}
                                alt={value.alt}
                                src={imgUrl}
                                className="object-cover object-center w-full h-96"
                                priority={false}
                              />
                            </div>
                          );
                        },
                      },
                      marks: {
                        link: ({ value, children }) => {
                          const { blank, href } = value;
                          return blank ? (
                            <Link
                              href={href}
                              className="underline"
                              target="_blank"
                              rel="noopener"
                            >
                              {children}
                            </Link>
                          ) : (
                            <Link href={href}>{children}</Link>
                          );
                        },
                      },
                    }}
                    i18nIsDynamicList
                    value={deliveryInstructions as TypedObject}
                  />
                </div>
              </div>

              {/* Right Column - Ticket Purchase Card */}
              <div>
                <div className="sticky top-8 space-y-4">
                  <EventCard
                    priceDescription={`${selectedVariant.name} - ${selectedVariant.price}$`}
                    product={product}
                    productId={id}
                  />
                  {user ? (
                    <CheckoutButton
                      items={[
                        {
                          name: `${name} - ${selectedVariant.name}`,
                          price: selectedVariant.price,
                          quantity: 1,
                        },
                      ]}
                    />
                  ) : (
                    <SignInButton>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                        Sign in to buy {name}
                      </Button>
                    </SignInButton>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 my-4">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Product description:
              </h3>
              <PortableText
                components={{
                  types: {
                    image: ({ value }) => {
                      // we need to get the image source url, and since @sanity/image-url will give us optimised images for each instance we use it
                      const imgUrl = urlForImage(value.asset).url();
                      return (
                        <div className=" grid min-h-[140px] w-full place-items-center overflow-hidden rounded-lg p-6 ">
                          <Image
                            width={2000}
                            height={2000}
                            alt={value.alt}
                            src={imgUrl}
                            className="object-cover object-center w-full h-96"
                            priority={false}
                          />
                        </div>
                      );
                    },
                  },
                  marks: {
                    link: ({ value, children }) => {
                      const { blank, href } = value;
                      return blank ? (
                        <Link
                          href={href}
                          className="underline"
                          target="_blank"
                          rel="noopener"
                        >
                          {children}
                        </Link>
                      ) : (
                        <Link href={href}>{children}</Link>
                      );
                    },
                  },
                }}
                i18nIsDynamicList
                value={description as TypedObject}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
