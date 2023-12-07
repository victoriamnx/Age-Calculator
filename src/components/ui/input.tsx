import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex max-[700px]:w-[5.5rem] w-[10rem] max-[700px]:px-[1rem] py-[0.75rem] px-[1.5rem] rounded-md border border-input bg-transparent max-[700px]:text-[1.25rem] text-[2rem] focus:outline-none focus:ring focus:border-[#854DFF] placeholder:text-[rgba(21, 21, 21, 0.5)] max-[700px]:placeholder:text-[1.25rem] placeholder:text-[2rem] font-bold cursor-pointer shadow-sm transition-colors file:border-0 file:bg-transparent focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
