import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import * as React from "react";

import * as RPNInput from "react-phone-number-input";

import flags from "react-phone-number-input/flags";

import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";

// Define the types for `PhoneInput` props
interface PhoneInputProps extends RPNInput.PhoneInputProps {
    className?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
    ({ className, onChange, placeholder, ...props }, ref) => {
        return (
            <RPNInput.default
                ref={ref}
                className={cn("flex", className)}
                flagComponent={FlagComponent}
                countrySelectComponent={CountrySelect}
                inputComponent={InputComponent}
                onChange={(value) => onChange?.(value || "")}
                defaultCountry="US"
                placeholder={placeholder}
                {...props}
            />
        );
    }
);
PhoneInput.displayName = "PhoneInput";

// Define the types for the `InputComponent` props
interface InputComponentProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const InputComponent = React.forwardRef<HTMLInputElement, InputComponentProps>(
    ({ className, ...props }, ref) => (
        <Input
            className={cn(
                "outline-none w-full bg-transparent py-3 px-4 transition-all duration-300 md:text-sm md:placeholder:text-sm border boder-solid boder-black/50 placeholder:transition-all placeholder:duration-200 focus:placeholder:opacity-0 focus:border-black rounded-tr-xl rounded-br-xl",
                className
            )}
            {...props}
            ref={ref}
        />
    )
);
InputComponent.displayName = "InputComponent";

// Define the types for `CountrySelect` props
interface CountryOption {
    value: string;
    label: string;
}

interface CountrySelectProps {
    disabled?: boolean;
    value?: string;
    onChange: (country: string) => void;
    options: CountryOption[];
}

const CountrySelect: React.FC<CountrySelectProps> = ({
    disabled,
    value,
    onChange,
    options,
}) => {
    const handleSelect = React.useCallback(
        (country: string) => {
            onChange(country);
        },
        [onChange]
    );

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    type="button"
                    variant={"outline"}
                    className={cn(
                        "flex items-center gap-1 rounded-e-none rounded-s-lg px-3"
                    )}
                    disabled={disabled}
                >
                    <FlagComponent country={value} countryName={value} />
                    <IoIosArrowUp
                        className={cn(
                            "-mr-2 h-4 w-4 opacity-50",
                            disabled ? "hidden" : "opacity-100"
                        )}
                    />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
                <Command>
                    <CommandList>
                        <ScrollArea className="h-72">
                            <CommandInput placeholder="Search country..." />
                            <CommandEmpty>No country found.</CommandEmpty>
                            <CommandGroup>
                                {options
                                    .filter((x) => x.value)
                                    .map((option) => (
                                        <CommandItem
                                            className="gap-2"
                                            key={option.value}
                                            onSelect={() => handleSelect(option.value)}
                                        >
                                            <FlagComponent
                                                country={option.value}
                                                countryName={option.label}
                                            />
                                            <span className="flex-1 text-sm">
                                                {option.label}
                                            </span>
                                            {option.value && (
                                                <span className="text-sm text-foreground/50">
                                                    {`+${RPNInput.getCountryCallingCode(
                                                        option.value
                                                    )}`}
                                                </span>
                                            )}
                                            <IoIosArrowDown
                                                className={cn(
                                                    "ml-auto h-4 w-4",
                                                    option.value === value
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                            </CommandGroup>
                        </ScrollArea>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

// Define the types for `FlagComponent` props
interface FlagComponentProps {
    country?: string;
    countryName?: string;
}

const FlagComponent: React.FC<FlagComponentProps> = ({ country, countryName }) => {
    const Flag = flags[country as keyof typeof flags];
    return (
        <div className="aspect-square w-5 h-5 pt-1">
            {Flag && <Flag title={countryName || "United States"} />}
        </div>
    );
};
FlagComponent.displayName = "FlagComponent";

export { PhoneInput };
