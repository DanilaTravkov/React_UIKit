import React, { useState } from 'react'
import { primaryTextInputStyles } from '../../utils/classStrings'

type TextInputType = "text" | "password" | "email" | "phone"

interface TextInputProps {
  primary? : boolean
  secondary? : boolean
  disabled? : boolean
  type: TextInputType
  label: string
}

export const TextInput: React.FC<TextInputProps> = ({primary, secondary, disabled, type, label}) => {

  const [error, setError] = useState<string | null>(null);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const value = event.target.value;

    switch(type) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          setError("Invalid email format");
        } else {
          setError(null);
        }
        break;
      case "phone":
        const phoneRegex = /^[0-9]{10,}$/;
        if (!phoneRegex.test(value)) {
          setError("Phone number should be at least 10 digits long");
        } else {
          setError(null);
        }
        break;
      case "text":
        if (value.length > 12) {
          setError("Maximum length is 12 characters");
        } else if (value === "") {
          setError("Cannot be empty");
        } else {
          setError(null);
        }
        break;
      case "password":
        if (value.length > 12) {
          setError("Maximum length is 12 characters");
        } else if (value === "") {
          setError("Cannot be empty");
        } else {
          setError(null);
        }
        break;
      default:
        setError(null);
    }
  }

  return (
    <div className="flex flex-col items-start m-2">
      <label htmlFor="input">{label}</label>
      <input
        name="input"
        className={primaryTextInputStyles}
        type={type}
        onBlur={handleBlur}
        disabled={disabled}
      />
      {error && <span className="text-red-500 mt-1">{error}</span>}
    </div>
  )
}
