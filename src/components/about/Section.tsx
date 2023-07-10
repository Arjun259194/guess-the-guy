import { SimpleComponentProps } from "@/lib/types";
import { FC } from "react";

export const Section: FC<SimpleComponentProps> = ({ children }) => {
  return <section className="my-5 space-y-5">{children}</section>;
};
