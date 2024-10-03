import React from 'react'
import { primaryTextInputStyles } from '../../utils/classStrings';

interface DatePickerProps {
    value: string
    onDateChange: (value: string) => void // Callback to notify parent when value of CustomDatePicker changes
    required?: boolean
    dataLabel?: string
}

export const CustomDatePicker: React.FC<DatePickerProps> = ({ value, onDateChange, dataLabel }) => {

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onDateChange(e.target.value)
        console.log(value) // remove later
    }

    return (
        <div className="flex flex-col items-start m-4">
            <label htmlFor="datePicker">Select date</label>
            <input className={primaryTextInputStyles} id='datePicker' type='date' value={value} onChange={handleDateChange} />
        </div>
    )
}
