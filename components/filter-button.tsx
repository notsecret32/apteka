import { ButtonHTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

export const FilterButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "flex w-full cursor-pointer items-center justify-between py-4 text-sm font-semibold leading-[130%] border-t",
      className,
    )}
    {...props}
  >
    {children}
  </button>
));
