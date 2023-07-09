import { SimpleComponentProps } from "@/lib/types";
import { FC } from "react";

export const Paragraph: FC<SimpleComponentProps> = ({ children }) => (
  <p className="text-lg tracking-wide leading-relaxed">{children}</p>
);
