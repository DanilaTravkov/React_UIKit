import React, { useState } from 'react'

interface RadioButtonOption {
    label: string
    value: string
}

interface RadioButtonFactorryProps {
    name?: string // A name to group the radio buttons together
    options: RadioButtonOption[] // The list of radio button options
    onValueChange: (selectedValue: string) => void // Callback to parent with the selected value
    required?: boolean;
}

export const CustomRadioButtonFactory: React.FC<RadioButtonFactorryProps> = ({ name, options, onValueChange, required }) => {

    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    
    const handleRadioChange = (value: string) => {
        setSelectedValue(value);
        onValueChange(value); // Pass the selected value to the parent component
    }

    return (
        <div className="m-4 flex flex-col gap-2 text-md">
            {options.map((option, index) => (
                <div key={index} className="flex items-center gap-2">
                    <input
                        type="radio"
                        // name={name}
                        id={`radio-${option.value}`}
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={() => handleRadioChange(option.value)}
                        className="hidden peer"
                    />
                    <span
                        onClick={() => handleRadioChange(option.value)}
                        className={`w-6 h-6 border-2 border-slate-500 rounded-full transition cursor-pointer
                        peer-checked:border-slate-200 peer-hover:bg-zinc-500/10 ${selectedValue === option.value ? "" : "animate-pulse"}`}
                    ></span>
                    <label
                        htmlFor={`radio-${option.value}`}
                        className="cursor-pointer select-none"
                    >
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    );
}
