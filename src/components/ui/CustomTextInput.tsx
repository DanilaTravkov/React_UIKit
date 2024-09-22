import React, { useState } from 'react'
import { primaryTextInputStyles } from '../../utils/classStrings'

type TextInputType = "text" | "password" | "email" | "number"

interface TextInputProps {
  primary? : boolean // If the input needs to stand out
  secondary? : boolean // If the input is regular
  disabled? : boolean // To forbid the user to enter data (o)
  placeholder?: string // The placeholder
  isValidated?: boolean, //  If not passed, validation for this input will be disabled on the component level
  type: TextInputType // The input type, all regular types + custom type 'email'
  label: string // The field label
}

export const CustomTextInput: React.FC<TextInputProps> = ({primary, secondary, isValidated, disabled, type, label, placeholder}) => {

  const [error, setError] = useState<string | null>(null);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const value = event.target.value;

    switch(type) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value === "") {
          setError("Cannot be empty")
        } else if (!emailRegex.test(value)) {
          setError("Invalid email format");
        } else {
          setError(null);
        }
        break;
      case "number":
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
    <div className="flex flex-col items-start m-4">
      <label htmlFor="input">{label}</label>
      <input
        name="input"
        className={primaryTextInputStyles}
        type={type}
        onBlur={isValidated ? handleBlur : () => {}}
        disabled={disabled}
        placeholder={placeholder}
      />
      {error && <span className="text-red-500 mt-1">{error}</span>}
    </div>
  )
}
