import * as React from "react";

import { cn } from "@/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "border-input focus-visible:ring-ring flex min-h-[60px] w-full border bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
