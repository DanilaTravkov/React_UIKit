import React, { useState } from 'react';
import { selectStyles, optionStyles, selectHeaderStyles } from '../../utils/classStrings';
import arrowDown from '../icons/ArrowDown.svg';

interface SelectOption {
    value: string | number; // actual value of the select object
    label: string; // shown label of the select object
}

interface SelectProps {
    placeholder: string; // the first element of the select box
    selectOptions: SelectOption[]; // options
}

export const CustomSelect: React.FC<SelectProps> = ({ placeholder, selectOptions }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelect = (value: string | number) => {
        setSelectedOption(value.toString());
        setIsOpen(false);
    };

    return (
        <div className="relative m-4">
            <div
                className={`${selectHeaderStyles} ${isOpen ? "rounded-b-none" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption ? <p className='flex justify-between'>{selectedOption} <img className={`${isOpen ? "rotate-180 duration-300" : "duration-300"}`} src={arrowDown} alt="arrow down" /></p> : <p className='flex justify-between'>{placeholder} <img className={`${isOpen ? "rotate-180 duration-300" : "duration-300 animate-pulse"}`} src={arrowDown} alt="arrow down" /></p>}
            </div>
            {isOpen && (
                <ul className={selectStyles}>
                    {selectOptions.map((item, index) => (
                        <li
                            key={index}
                            className={`${optionStyles} cursor-pointer ${isOpen ? "first:rounded-t-none" : ""}`}
                            onClick={() => handleSelect(item.label)}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
