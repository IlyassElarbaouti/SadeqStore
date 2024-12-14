import { getFeatured } from '@/sanity/schemas/sanity-utils'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ScrollArea, ScrollBar } from './ui/scroll-area'

export default async function Trending() {
    const products = await getFeatured()
    return (
        <section className="w-full py-8 bg-stone-200">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-medium mb-4 text-center">Featured Products</h2>
            <div className="hidden md:block">
              <ScrollArea className="w-full whitespace-nowrap rounded-md border shadow-inner">
                <div className="flex w-max space-x-4 p-4">
                  {products.map((product:  {slug:{current:string},image:string,name:string,_id:string} ) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
                <ScrollBar className='bg-black' orientation="horizontal" />
              </ScrollArea>
            </div>
            <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
              {products.map((product: {slug:{current:string},image:string,name:string,_id:string} ) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )
    
}


function ProductCard({ product }: {product:{ slug:{current:string},image:string,name:string,_id:string}}) {
    return (
      <Link 
        href={`/products/${product._id}`}
        className="flex items-center space-x-4 rounded-md border p-4 hover:bg-gray-100 transition-colors"
      >
        <div className="relative w-16 h-16 flex-shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex items-center space-x-2">
          <h3 className="text-sm font-medium whitespace-normal max-w-[150px]">{product.name}</h3>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>
      </Link>
    )
  }