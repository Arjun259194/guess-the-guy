import Data, { Categories } from "@/lib/data";

import { ClassNameValue, twMerge } from "tailwind-merge";

export function getRandomQuote(cat: Categories) {
  const data = Data.get(cat);
  if (!data) {
    return null;
  }
  return data[Math.floor(Math.random() * data.length)];
}

export function cn(...className: ClassNameValue[]): string {
  return twMerge(className);
}
