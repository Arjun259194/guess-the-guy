import Link from "next/link";
import { FC } from "react";

interface Props {
  category: string;
  image: string;
}

export const CategoriesCard: FC<Props> = ({ category, image }) => {
  return (
    <article className="group overflow-hidden ring-2 ring-indigo-300 shadow-lg shadow-indigo-500 bg-slate-700 relative flex flex-col items-center justify-between rounded-lg ">
      <Link className="w-full h-full" href={`/game/${category}`}>
        <img
          className="rounded-lg cursor-pointer w-full h-full"
          src={image}
          alt={category}
        />
      </Link>
      <div className="absolute pointer-events-none transition-all duration-500 ease-in-out group-hover:bg-slate-900/30 inset-0 bg-slate-900/70" />
      <p className=" min-w-max group-hover:top-full group-hover:-translate-y-14 group-hover:text-xl group-hover:font-semibold group-hover:shadow-md group-hover:ring-2 group-hover:ring-indigo-400 group-hover:shadow-indigo-600 group-hover:bg-slate-900 py-2 px-6 rounded-full transition-all duration-500 ease-in-out text-center pointer-events-none text-2xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-bold capitalize">
        {category}
      </p>
    </article>
  );
};
