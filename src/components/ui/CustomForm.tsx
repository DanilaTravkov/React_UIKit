import React, { useState, ReactNode, useEffect, useRef } from 'react'
import { CustomCheckBoxFactory } from './CustomCheckBoxFactory'
import { CustomDatePicker } from './CustomDatePicker'
import { CustomRadioButtonFactory } from './CustomRadioButtonFactory'
import { CustomSelect } from './CustomSelect'
import { CustomTextInput } from './CustomTextInput'
import { CustomButton } from './CustomButton'
import { ToastHandle } from '../../App'

type CustomFormComponent =
  | typeof CustomCheckBoxFactory
  | typeof CustomDatePicker
  | typeof CustomRadioButtonFactory
  | typeof CustomSelect
  | typeof CustomTextInput
  | typeof CustomButton;

type FormField = {
  value: any;
  required: boolean
  isValid: boolean
}

interface CustomFormProps {
  children: ReactNode
  onSubmit: (values: Record<string, any>) => void
  toastRef: React.RefObject<ToastHandle>,
}

export const CustomForm: React.FC<CustomFormProps> = ({ children, onSubmit, toastRef }) => {
  const [formValues, setFormValues] = useState<Record<string, FormField>>({
    date: { value: '', required: true, isValid: false },
    username: { value: '', required: true, isValid: false },
    email: { value: '', required: true, isValid: false },
    password: { value: '', required: true, isValid: false },
    select: { value: '', required: true, isValid: false },
    checkbox: { value: [], required: true, isValid: false },
    radio: { value: '', required: true, isValid: false },
  });
  const [isFormValid, setIsFormValid] = useState(false)

  const inputRefs = useRef<Record<string, any>>({})

  // Handle child value change and update form state
  const handleChildChange = (key: string, value: any, required: boolean = false) => {
    const isFieldValid = required ? value !== "" && value !== null && value !== undefined : true

    setFormValues((prev) => ({
      ...prev,
      [key]: { value, required, isValid: isFieldValid },
    }))
  }

  // Re-validate the form every time formValues change
  useEffect(() => {
    const allFieldsValid = Object.values(formValues).every(
      (field) => !field.required || field.isValid
    );
    setIsFormValid(allFieldsValid)
  }, [formValues])

  const handleSubmit  = () => {
    Object.keys(inputRefs.current).forEach((key) => {
      if (formValues[key] && formValues[key].required && !formValues[key].isValid) {
        inputRefs.current[key]?.triggerValidation();
      } else {
        console.error(`Form value for key ${key} is undefined`);
      }
    });
    

    if (isFormValid) {
      const finalValues = Object.fromEntries(
        Object.entries(formValues).map(([key, data]) => [key, data.value])
      );
      onSubmit(finalValues);
    }
  }

  useEffect(() => {
    console.log("inputRefs:", inputRefs.current);
  }, [inputRefs.current]);

  // Render children and inject props to handle state and validation
  const renderChildren = () =>
    React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        const childType = child.type as CustomFormComponent;
        const childProps: any = child.props;
  
        switch (childType) {
          case CustomCheckBoxFactory:
            return React.cloneElement(child, {
              onCheckBoxChange: (values: any) => handleChildChange('checkbox', values, childProps.required),
              ref: (el: any) => (inputRefs.current[childProps.dataLabel || "checkbox"] = el)
            });
          case CustomDatePicker:
            return React.cloneElement(child, {
              onDateChange: (value: any) => handleChildChange(childProps.dataLabel || "date", value, childProps.required),
              ref: (el: any) => (inputRefs.current[childProps.dataLabel || "date"] = el)
            });
          case CustomRadioButtonFactory:
            return React.cloneElement(child, {
              onValueChange: (value: any) => handleChildChange('radio', value, childProps.required),
              ref: (el: any) => (inputRefs.current[childProps.dataLabel || "radio"] = el)
            });
          case CustomSelect:
            return React.cloneElement(child, {
              onSelectChange: (value: any) => handleChildChange(childProps.dataLabel || 'select', value, childProps.required),
              ref: (el: any) => (inputRefs.current[childProps.dataLabel || "select"] = el)
            });
          case CustomTextInput:
            return React.cloneElement(child, {
              onInputChange: (value: any) => handleChildChange(childProps.dataLabel || childProps.type, value, childProps.required),
              ref: (el: any) => (inputRefs.current[childProps.dataLabel || childProps.type] = el)
            });
          case CustomButton:
            if (childProps.type === 'submit') {
              return React.cloneElement(child, {
                onClick: () => handleSubmit(),
                toastAction: () => {
                  if (!isFormValid) {
                    toastRef.current?.showToast("Some required fields are empty!");
                  } else {
                    toastRef.current?.showToast("Form submitted!");
                  }
                },
              });
            }
            return child;
          default:
            return child;
        }
      }
      return child;
    });
  

  return <div>{renderChildren()}</div>
}
