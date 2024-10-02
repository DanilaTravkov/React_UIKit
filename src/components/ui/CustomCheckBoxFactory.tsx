import React, { useState } from 'react';
import { checkBoxStyles } from '../../utils/classStrings';

export interface CheckBoxValue {
    label: string; // The checkbox label
    isChecked: boolean; // tracks when the checkbox is checked
}

interface CheckBoxFactoryProps {
    values: CheckBoxValue[]; // checkbox objects
    onCheckBoxChange: (updatedValues: CheckBoxValue[]) => void;  // Callback to parent component, tracks checked boxes and sends them up the components tree
    required?: boolean;
}

export const CustomCheckBoxFactory: React.FC<CheckBoxFactoryProps> = ({ values, onCheckBoxChange }) => {
    const [checkBoxValues, setCheckBoxValues] = useState<CheckBoxValue[]>(values);

    const handleCheckboxChange = (index: number) => {
        const updatedValues = checkBoxValues.map((item, i) => {
            if (i === index) {
                return { ...item, isChecked: !item.isChecked };
            }
            return item;
        });

        setCheckBoxValues(updatedValues);
        onCheckBoxChange(updatedValues); 
    };

    return (
        <div className="m-4 flex flex-col gap-2 relative text-md">
            {checkBoxValues.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    <input
                        className="hidden peer"
                        id={`checkbox-${index}`}
                        type="checkbox"
                        checked={item.isChecked}
                        onChange={() => handleCheckboxChange(index)} 
                    />
                    <span
                        onClick={() => handleCheckboxChange(index)} 
                        className={`${checkBoxStyles} ${item.isChecked ? "" : "animate-pulse"}`}
                    ></span>
                    <label
                        htmlFor={`checkbox-${index}`}
                        className="cursor-pointer select-none"
                    >
                        {item.label}
                    </label>
                </div>
            ))}
        </div>
    );
};
