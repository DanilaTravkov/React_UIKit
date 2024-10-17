import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { _selectStyles, _optionStyles, _selectHeaderStyles } from '../../utils/classStrings';
import { CustomInputType } from '../types/formInputTypes';
import arrowDown from '../icons/ArrowDown.svg';

export interface SelectOption {
    value: string | number; // actual value of the select object
    label: string; // shown label of the select object
}

interface SelectProps {
    placeholder: string; // the first element of the select box
    selectOptions: SelectOption[]; // options
    onSelectChange: (selectedValue: string | number) => void; // Callback to notify parent when a value is selected
    /**
     * Mark the field as required.
     * Once the field is marked as required, it cannot be left empty before form submit.
     * It will display an error message if empty
     *
     * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
     */
    required?: boolean;
    dataLabel?: string; // Label for data identification
}

export const CustomSelect = forwardRef<CustomInputType, SelectProps>(({ placeholder, selectOptions, onSelectChange, required, dataLabel }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null); // Local error state

    const handleSelect = (value: string | number) => {
        setSelectedOption(value.toString());
        setIsOpen(false);
        onSelectChange(value); // Pass selected value to parent
    };

    useImperativeHandle(ref, () => ({
        triggerValidation: () => {
            if (required && !selectedOption) {
                setError('This field is required');
            }
        }
    }))

    return (
        <div className="relative m-4">
            <div
                className={`${_selectHeaderStyles} ${isOpen ? "rounded-b-none" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption ? <p className='flex justify-between'>{selectedOption} <img className={`${isOpen ? "rotate-180 duration-300" : "duration-300"}`} src={arrowDown} alt="arrow down" /></p> : <p className='flex justify-between'>{placeholder} <img className={`${isOpen ? "rotate-180 duration-300" : "duration-300 animate-pulse"}`} src={arrowDown} alt="arrow down" /></p>}
            </div>
            {isOpen && (
                <ul className={_selectStyles}>
                    {selectOptions.map((item, index) => (
                        <li
                            key={index}
                            className={`${_optionStyles} cursor-pointer ${isOpen ? "first:rounded-t-none" : ""}`}
                            onClick={() => handleSelect(item.value)}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            )}
            {error && <p className="text-red-500 mt-1">{error}</p>}
        </div>
    );
});
