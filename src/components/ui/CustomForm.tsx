import React, { useState, ReactNode, useEffect } from 'react'
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
  toastRef: React.RefObject<ToastHandle>
}

export const CustomForm: React.FC<CustomFormProps> = ({ children, onSubmit, toastRef }) => {
  const [formValues, setFormValues] = useState<Record<string, FormField>>({})
  const [isFormValid, setIsFormValid] = useState(false)

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

  // Render children and inject props to handle state and validation
  const renderChildren = () =>
    React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        const childType = child.type as CustomFormComponent
        const childProps: any = child.props

        switch (childType) {
          case CustomCheckBoxFactory:
            return React.cloneElement(child, {
              onCheckBoxChange: (values: any) => handleChildChange('checkbox', values, childProps.required),
            })
          case CustomDatePicker:
            return React.cloneElement(child, {
              onDateChange: (value: any) => handleChildChange(child.props.dataLabel ? child.props.dataLabel : child.props.type, value, childProps.required),
            })
          case CustomRadioButtonFactory:
            return React.cloneElement(child, {
              onValueChange: (value: any) => handleChildChange('radio', value, childProps.required),
            })
          case CustomSelect:
            return React.cloneElement(child, {
              onSelectChange: (value: any) => handleChildChange('select', value, childProps.required),
            })
          case CustomTextInput:
            return React.cloneElement(child, {
              onInputChange: (value: any) => handleChildChange(child.props.dataLabel ? child.props.dataLabel : child.props.type, value, childProps.required),
            })
          case CustomButton:
            if (child.props.type === 'submit') {
              return React.cloneElement(child, {
                onClick: () => {
                  if (isFormValid) {
                    const finalValues = Object.fromEntries(
                      Object.entries(formValues).map(([key, data]) => [key, data.value])
                    )
                    onSubmit(finalValues)
                  }
                },
                toastAction: () => {
                  if (!isFormValid) {
                    toastRef.current?.showToast("Some required fields are emtpy!")
                  } else {
                    toastRef.current?.showToast("Form submitted!")
                  }
                },
                // disabled: !isFormValid, // Disable button if form is invalid
              })
            }
            return child
          default:
            return child
        }
      }
      return child
    })

  return <div>{renderChildren()}</div>
}
