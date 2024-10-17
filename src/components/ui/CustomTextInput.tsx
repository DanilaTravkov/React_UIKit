import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from 'react';
import { _primaryTextInputStyles } from '../../utils/classStrings';
import { CustomInputType, TextInputProps } from '../types/formInputTypes';

export const CustomTextInput = forwardRef<CustomInputType, TextInputProps>(({
  primary,
  secondary,
  isValidated,
  disabled,
  type,
  label,
  placeholder,
  required,
  onInputChange,
}, ref) => {
  const [value, setValue] = useState<string>(""); // State for input value
  const [error, setError] = useState<string | null>(null); // Local error state

  // Notify parent of the current input value initially
  useEffect(() => {
    onInputChange(value);
  }, []); // Run only on component mount

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setValue(newValue)
    onInputChange(newValue)

    // If the field is required, set local error if empty
    if (required && newValue === "") {
      setError("This field is required")
    } else {
      setError(null)
    }
  };

  useImperativeHandle(ref, () => ({
    triggerValidation: () => {
      if (required && value === '') {
        setError('This field is required');
      }
    },
  }));

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    // Additional validations based on input type
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
        className={_primaryTextInputStyles}
        type={type}
        onBlur={isValidated ? handleBlur : () => {}} // Only validate onBlur if validation is required
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={handleChange} // Update value state on change
      />
      {
        error && <span className="text-red-500 mt-1">{error}</span>
      }
    </div>
  )
})
