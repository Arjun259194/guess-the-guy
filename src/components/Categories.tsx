import { categories } from "@/lib/data";
import { FC } from "react";
import { CategoriesCard } from "./CategoriesCard";

export const Categories: FC = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {Object.entries(categories).map(([key, value], index) => {
        return <CategoriesCard category={key} image={value} key={index} />;
      })}
    </div>
  );
};
