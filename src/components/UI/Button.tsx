import { cn } from "@/utils/functions";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";

export const buttonVariants = cva(
  "border-2 flex justify-center items-center hover:brightness-110 hover:shadow-lg active:scale-95 transition-all duration-50 rounded-lg capitalize text-center font-semibold disabled:bg-gray-300 disabled:border-gray-300 disabled:text-white disabled:hover:brightness-100 disabled:hover:shadow-none disabled:active:scale-100 ",
  {
    variants: {
      variant: {
        default: "border-indigo-500 bg-indigo-500 text-gray-100 ",
        outline: "border-indigo-500 bg-slate-900 text-indigo-500 ",
      },
      size: {
        sm: "text-sm py-1 px-5",
        default: "text-lg py-1 px-6",
        lg: "text-xl py-2 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button: FC<Props> = ({ variant, children, size, className, ...props }) => (
  <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
    {children}
  </button>
);
