"use client";
import { Product } from "@/types";
import React from "react";
import ProductCard from "./ProductCard";
import { useSearchParams } from "next/navigation";

const ProductsListFiltered = ({ products }: { products: Product[] }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  if (search) {
    return products
      .filter((product) =>
        product.name.toLowerCase().startsWith(search.toLowerCase() as string)
      )
      .map((product) => (
        <ProductCard
          key={product._id}
          priceDescription={`from ${product.variations[0].price}$`}
          product={product}
          productId={product._id}
        />
      ));
  }
  return products.map((product) => (
    <ProductCard
      key={product._id}
      priceDescription={`from ${product.variations[0].price}$`}
      product={product}
      productId={product._id}
    />
  ));
};

export default ProductsListFiltered;
