import { getCards } from "@/sanity/schemas/sanity-utils";
import { Ticket } from "lucide-react";
import Spinner from "./Spinner";
import { Product } from "@/types";
import ProductsListFiltered from "./ProductsListFiltered";


export default async function EventList() {
  const products:Product[] = await  getCards(1);

  if (!products) {
    return (
      <div className="min-h-[400px] flex items-center justify-center ">
        <Spinner />
      </div>
    );
  }
  return (


    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Our products</h1>
          <p className="mt-2 text-gray-600">
            Discover all our digital products
          </p>
        </div>
      </div>

      {/* Upcoming products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ProductsListFiltered products={products}/>
        </div>
      ) : (
        <div className="bg-gray-50 rounded-lg p-12 text-center mb-12">
          <Ticket className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900">
            No products
          </h3>
          <p className="text-gray-600 mt-1">Check back later for new products</p>
        </div>
      )}
    </div>
    
  );
}