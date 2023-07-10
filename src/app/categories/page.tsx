import { CategoriesContainer } from "@/components/categories/CategoriesContainer";

export default function Categories() {
  return (
    <main className="container mx-auto my-10 text-center space-y-5">
      <h2 className="text-4xl capitalize font-semibold">
        Select and play in your favorite category
      </h2>
      <CategoriesContainer />
    </main>
  );
}
