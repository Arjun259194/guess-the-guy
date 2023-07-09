import { SimpleComponentProps } from "@/lib/types";
import { FC } from "react";

export const Heading: FC<SimpleComponentProps> = ({ children }) => {
  return (
    <h2 className="text-4xl font-semibold capitalize tracking-wider underline underline-offset-8">
      {children}
    </h2>
  );
};
