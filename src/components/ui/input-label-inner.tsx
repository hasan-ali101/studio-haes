"use client";

import * as React from "react";

import { Label } from "./label";
import { Input } from "./input";
import type { InputProps } from "./input";

import { cn } from "@/utils";

export interface InputLabelInnerProps extends InputProps {
  label: string;
  value: string;
}

const InputLabelInner = ({
  className,
  label,
  value,
  id,
  placeholder,
  onFocus,
  onBlur,
  ...props
}: InputLabelInnerProps) => {
  const [focused, setFocused] = React.useState(!!value);

  React.useEffect(() => {
    setFocused(!!value);
  }, [value]);
  return (
    <div className={cn("relative w-full", className)}>
      <Label
        className={cn(
          "pointer-events-none absolute left-3 top-2 origin-[0] translate-y-3 scale-125 text-xs text-white/60 transition",
          focused && "text-input-foreground translate-y-0 scale-100",
        )}
        htmlFor={id}
      >
        {label}
      </Label>
      <Input
        {...props}
        id={id}
        value={value}
        placeholder={focused ? placeholder : undefined}
        className="px-3 pt-6 font-medium"
        onFocus={(e) => {
          setFocused(true);
          onFocus && onFocus(e);
        }}
        onBlur={(e) => {
          !value && setFocused(false);
          onBlur && onBlur(e);
        }}
      />
    </div>
  );
};

export { InputLabelInner };
