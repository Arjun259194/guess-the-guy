import { ReactNode } from "react";

export type DataSet = {
  quote: string;
  author: string;
  movie: string;
};

export interface SimpleComponentProps {
  children: ReactNode;
}
