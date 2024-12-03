"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Product } from "@/types";

export default function EventCard({ productId,product,priceDescription }: { productId: string,priceDescription:string,product:Product }) {
  const router = useRouter();
  const {image,name} = product
console.log(product)
  return (
    <div
      onClick={() => router.push(`/products/${productId}`)}
      className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer overflow-hidden relative`}
    >
      {/* Event Image */}
      {image && (
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}

      <div className={`p-6 ${image ? "relative" : ""}`}>
        <div className="flex justify-between items-start">
          <div>
            <div className="flex flex-col items-start gap-2">

              <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
            </div>
          </div>

          {/* Price Tag */}
          <div className="flex flex-col items-end gap-2 ml-4">
            <span
              className={`px-4 py-1.5 font-semibold rounded-full flex gap-2 bg-green-50 text-green-700"
              }`}
            >
              {<span className="">{priceDescription} </span>}
            
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}