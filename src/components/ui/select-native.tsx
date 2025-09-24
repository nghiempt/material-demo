import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const SelectNative = ({
  className,
  children,
  ...props
}: React.ComponentProps<"select">) => {
  return (
    <div className="relative flex">
      <select
        data-slot="select-native"
        className={cn(
          "w-52 py-3 peer border-input text-foreground focus-visible:none focus-visible:none has-[option[disabled]:checked]:text-muted-foreground aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex cursor-pointer appearance-none items-center rounded-md border text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[0px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          props.multiple
            ? "[&_option:checked]:bg-accent py-1 *:px-3 *:py-1"
            : "ps-3 pe-8",
          className
        )}
        {...props}
      >
        {children}
      </select>
      {!props.multiple && (
        <span className="text-muted-foreground/80 peer-aria-invalid:text-destructive/80 pointer-events-none absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center peer-disabled:opacity-50">
          <ChevronDownIcon size={16} aria-hidden="true" />
        </span>
      )}
    </div>
  );
};

export { SelectNative };
