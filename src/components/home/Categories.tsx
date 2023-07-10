import { categories } from "@/lib/data";
import Link from "next/link";
import { FC } from "react";
import { Button } from "../UI/Button";
import { CategoriesCard } from "./CategoriesCard";

export const Categories: FC = () => {
  return (
    <section className="flex flex-col items-center space-y-10">
      <h3 className="text-3xl font-semibold capitalize">Famous Categories</h3>
      <div className="grid grid-cols-4 gap-5">
        {Object.entries(categories).map(([key, value], index) => {
          if (index > 3) return null;
          return <CategoriesCard category={key} image={value} key={index} />;
        })}
      </div>
      <Link href="/categories">
        <Button variant="outline">More Categories</Button>
      </Link>
    </section>
  );
};
