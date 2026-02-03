import { X } from "lucide-react";
import { ButtonHTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

export const Chips = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "flex items-center gap-1 text-xs leading-[%150] cursor-pointer border-0 hover:line-through font-normal rounded-[24px] px-3 py-1 bg-[#eaeef4] min-h-6.5 mt-1 mr-2",
      className,
    )}
    {...props}
  >
    {children}
    <X className="size-4 text-[#8a95a8]" />
  </button>
));
