import React, { useEffect, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/utils";
import {
  CountryCodeType,
  countryCodes,
  DEFAULT_COUNTRY,
} from "@/data/country-codes";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { InputLabelInner } from "./input-label-inner";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
}

interface InputMobileProps
  extends Omit<InputProps, "type" | "placeholder" | "inputMode"> {}

const getFlagEmoji = (countryCode: string): string => {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

export const InputMobile = ({
  className,
  value,
  ...props
}: InputMobileProps) => {
  const [open, setOpen] = useState(false);
  const [countryCode, setCountryCode] =
    useState<CountryCodeType>(DEFAULT_COUNTRY);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [maxLength, setMaxLength] = useState<number>(14);

  useEffect(() => {
    const dialCode = countryCode.dialCode;
    if (value.startsWith(dialCode)) {
      const newValue = value.replace(countryCode.dialCode, "");
      const numsOnly = newValue.replace(/\D/g, "");
      setPhoneNumber(numsOnly);
      const fullNumber = `${countryCode.dialCode}${numsOnly}`;

      if (fullNumber.startsWith("+4407")) {
        setMaxLength(15);
      } else if (fullNumber.startsWith("+447")) {
        setMaxLength(14);
      } else {
        setMaxLength(16);
      }
    } else return;
  }, [countryCode, value]);

  return (
    <div className={cn("flex gap-1 bg-slate-100", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="h-[50px] w-20 justify-between border">
            {getFlagEmoji(countryCode.code)}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-full bg-slate-100 p-0">
          <Command>
            <CommandInput placeholder="Search for a country..." />
            <CommandList>
              <CommandEmpty>Not found</CommandEmpty>
              <CommandGroup>
                {countryCodes.map((item) => (
                  <CommandItem
                    className="cursor-pointer bg-slate-100 hover:bg-white/90"
                    key={item.code}
                    value={`${item.name} (${item.dialCode})`}
                    onSelect={() => {
                      setCountryCode(item);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        item === countryCode ? "opacity-100" : "opacity-0",
                      )}
                    />
                    <div className="mr-2">{getFlagEmoji(item.code)}</div>
                    {`${item.name} (${item.dialCode})`}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <InputLabelInner
        {...props}
        maxLength={maxLength}
        value={countryCode.dialCode + " " + phoneNumber}
        placeholder={countryCode.dialCode}
        label="mobile"
        type="text"
        inputMode="numeric"
        className=""
      />
    </div>
  );
};
