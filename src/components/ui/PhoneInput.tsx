import React, { useState } from 'react';
import { Input } from './input';
import { Label } from './label';
import { Phone } from 'lucide-react';

interface PhoneInputProps {
    value: string;
    onChange: (value: string) => void;
    error?: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
}

export function PhoneInput({
    value,
    onChange,
    error,
    label = "Phone Number",
    placeholder = "77 123 4567",
    required = false
}: PhoneInputProps) {
    const [focused, setFocused] = useState(false);

    const formatPhoneNumber = (input: string) => {
        // Remove all non-digit characters
        const digits = input.replace(/\D/g, '');

        // Limit to 9 digits (Sri Lankan mobile numbers)
        const limited = digits.slice(0, 9);

        // Format as XX XXX XXXX
        if (limited.length <= 2) {
            return limited;
        } else if (limited.length <= 5) {
            return `${limited.slice(0, 2)} ${limited.slice(2)}`;
        } else {
            return `${limited.slice(0, 2)} ${limited.slice(2, 5)} ${limited.slice(5)}`;
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhoneNumber(e.target.value);
        onChange(formatted);
    };

    const validatePhoneNumber = (phone: string) => {
        const digits = phone.replace(/\D/g, '');
        return digits.length === 9;
    };

    const isValid = value ? validatePhoneNumber(value) : true;

    return (
        <div className="space-y-2">
            {label && (
                <Label htmlFor="phone-input" className="text-sm font-medium">
                    {label} {required && <span className="text-destructive">*</span>}
                </Label>
            )}
            <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center space-x-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm font-medium">+94</span>
                    <span className="text-muted-foreground">|</span>
                </div>
                <Input
                    id="phone-input"
                    type="tel"
                    value={value}
                    onChange={handleChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder={placeholder}
                    className={`pl-24 ${error || (!isValid && value && !focused)
                            ? 'border-destructive focus-visible:ring-destructive'
                            : ''
                        }`}
                    required={required}
                />
            </div>
            {error && (
                <p className="text-sm text-destructive">{error}</p>
            )}
            {!error && value && !isValid && !focused && (
                <p className="text-sm text-destructive">
                    Please enter a valid 9-digit Sri Lankan phone number
                </p>
            )}
            {!error && value && isValid && (
                <p className="text-sm text-muted-foreground">
                    Full number: +94 {value}
                </p>
            )}
        </div>
    );
}
