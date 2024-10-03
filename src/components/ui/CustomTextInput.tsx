import React, { useState, useEffect } from 'react';
import { primaryTextInputStyles } from '../../utils/classStrings';

type TextInputType = "text" | "password" | "email" | "number";

interface TextInputProps {
  primary?: boolean; // If the input needs to stand out
  secondary?: boolean; // If the input is regular
  disabled?: boolean; // To forbid the user to enter data
  placeholder?: string; // The placeholder
  isValidated?: boolean; // If not passed, validation for this input will be disabled
  type: TextInputType; // The input type, all regular types + custom type 'email'
  label: string; // The field label
  onInputChange: (value: string) => void; // Callback to pass the value to the parent
  required?: boolean; // Mark the field as required
  dataLabel?: string
}

export const CustomTextInput: React.FC<TextInputProps> = ({
  primary,
  secondary,
  isValidated,
  disabled,
  type,
  label,
  placeholder,
  required,
  dataLabel,
  onInputChange,
}) => {
  const [value, setValue] = useState<string>(""); // Initialize the value state
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Notify parent about initial value state (empty by default)
    onInputChange(value);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onInputChange(newValue);

    // If the field is required, show an error when it's empty
    if (required && newValue === "") {
      setError("This field is required");
    } else {
      setError(null);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    // Additional validations based on type
    switch (type) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (required && newValue === "") {
          setError("This field is required");
        } else if (!emailRegex.test(newValue)) {
          setError("Invalid email format");
        } else {
          setError(null);
        }
        break;
      case "number":
        const phoneRegex = /^[0-9]{10,}$/;
        if (required && newValue === "") {
          setError("This field is required");
        } else if (!phoneRegex.test(newValue)) {
          setError("Phone number should be at least 10 digits long");
        } else {
          setError(null);
        }
        break;
      case "text":
        if (required && newValue === "") {
          setError("This field is required");
        } else if (newValue.length > 12) {
          setError("Maximum length is 12 characters");
        } else {
          setError(null);
        }
        break;
      case "password":
        if (required && newValue === "") {
          setError("This field is required");
        } else if (newValue.length > 12) {
          setError("Maximum length is 12 characters");
        } else {
          setError(null);
        }
        break;
      default:
        if (required && newValue === "") {
          setError("This field is required");
        } else {
          setError(null);
        }
        break;
    }
  };

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
        value={value}
        onChange={handleChange} // Update value state on change
      />
      {error && <span className="text-red-500 mt-1">{error}</span>}
    </div>
  );
};
