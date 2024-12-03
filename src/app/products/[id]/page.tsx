/* eslint-disable @typescript-eslint/no-explicit-any */
import Spinner from "@/components/Spinner";
import { getCard} from "@/sanity/schemas/sanity-utils";
import ProductContent from "@/components/ProductContent";

export default async function EventPage({params}:any) {
const id = await params?.id
  const product = await  getCard(id);

  if (!product ) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <ProductContent id={id} product={product}/>
  );
}