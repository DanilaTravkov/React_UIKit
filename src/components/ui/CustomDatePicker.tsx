import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { _primaryTextInputStyles } from '../../utils/classStrings';
import { CustomInputType, DatePickerProps } from '../types/formInputTypes';

export const CustomDatePicker = forwardRef<CustomInputType, DatePickerProps>(({ onDateChange, required }, ref) => {
    const [value, setValue] = useState<string>(""); // State for input value
    const [error, setError] = useState<string | null>(null); // Local error state

    // Notify parent of the current input value initially
    useEffect(() => {
        onDateChange(value);
    }, []); // Run only on component mount

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value
        setValue(newValue)
        onDateChange(newValue)

        if (required && newValue === "") {
            setError("This field is required")
          } else {
            setError(null)
          }
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const newValue = event.target.value
        if (required && newValue === "") {
            setError("This field is required")
          } else {
            setError(null)
          }
    }

    useImperativeHandle(ref, () => ({
        triggerValidation: () => { 
            if (required && value === '')
                setError("This field is required")
        },
    }))

    return (
        <div className="flex flex-col items-start m-4">
            <label htmlFor="datePicker">Select date</label>
            <input onBlur={handleBlur} className={_primaryTextInputStyles} id='datePicker' type='date' value={value} onChange={handleDateChange} />
            {error && <span className="text-red-500 mt-1">{error}</span>}
        </div>
    )
})
