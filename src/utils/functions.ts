import data from "@/lib/data";

export function getRandomQuote() {
  return data[Math.floor(Math.random() * data.length)];
}
