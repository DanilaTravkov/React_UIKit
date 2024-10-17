import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { _primaryTextInputStyles } from '../../utils/classStrings';
import { CustomInputType } from '../types/formInputTypes';

interface DatePickerProps {
    value: string
    onDateChange: (value: string) => void // Callback to notify parent when value of CustomDatePicker changes
    required?: boolean
    dataLabel?: string
}

export const CustomDatePicker = forwardRef<CustomInputType, DatePickerProps>(({ value, onDateChange, required }, ref) => {
    const [error, setError] = useState<string | null>(null); // Local error state

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onDateChange(e.target.value)
        console.log(e.target.value) // remove later
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
            <input className={_primaryTextInputStyles} id='datePicker' type='date' value={value} onChange={handleDateChange} />
            {error && <span className="text-red-500 mt-1">{error}</span>}
        </div>
    )
})
