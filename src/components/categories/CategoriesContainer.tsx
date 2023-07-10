import { categories } from "@/lib/data";
import { CategoriesCard } from "../home/CategoriesCard";

export const CategoriesContainer = () => {
  return (
    <section className="grid grid-cols-3 gap-5">
      {Object.entries(categories).map(([key, value], index) => {
        return <CategoriesCard category={key} image={value} key={index} />;
      })}
    </section>
  );
};
