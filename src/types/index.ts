import { TypedObject } from "sanity";

export type Product = {
    name: string;
    _id:string;
    slug: {
      current: string;
    };
    description?: TypedObject ;
    deliveryInstructions?: TypedObject;
    isFeatured: boolean;
    image?: string;
    category: string;
    variations: Array<{
      name: string;
      price: number;
      isDefault: boolean;
    }>;
  };