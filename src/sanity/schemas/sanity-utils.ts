import createImageUrlBuilder from "@sanity/image-url";
import { createClient, groq } from "next-sanity";

const projectId = "8f4sc2ee";
const dataset = "production";

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-10-17",
  useCdn: true,
});
// lib/sanity.image.ts

const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = (source: string) => {
  return imageBuilder.image(source).auto("format").fit("max");
};

export async function getCards(page: number) {
  const res = await client.fetch(
    groq`*[_type == "product"] [${25 * (Number(page) - 1 || 0)}...${25 * Number(page || 1)}] {
      _createdAt,
      _id,
      slug,
      name,
      description,
      deliveryInstructions,
      isFeatured,
      "category": category->name,
      "image": image.asset->url,
         variations[] {
        name,
        price,
        isDefault
      },
    }`

  );
  return res;
}


export async function getCard(id: string) {
  const course = await client.fetch(
    groq`*[_type == "product" && _id == "${id}"][0]{
      _createdAt,
      _id,
      slug,
      name,
      description,
      deliveryInstructions,
      isFeatured,
      "category": category->name,
      "image": image.asset->url,
         variations[] {
        name,
        price,
        isDefault
      },
    }`
  );
  return course
}
export async function getCategories() {
  const course = await client.fetch(
    groq`*[_type == "category" ]{
      slug,
      title,
      },
    }`
  );
  return course
}