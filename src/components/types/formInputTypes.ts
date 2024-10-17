import { ReactNode } from "react";
import { ToastHandle } from '../../App'

export type TextInputType = "text" | "password" | "email" | "number";

export interface CustomInputType {
    /**
     * Defines logic for validating the input. Provide your own validation rules.
     *
     * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
    */
    triggerValidation: () => void;
}

export interface TextInputProps {
/**
 * If set to true, the input will have primary styles.
 *
 * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
*/
primary?: boolean;
/**
 * If set to true, the input will have secondary styles.
 *
 * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
*/
secondary?: boolean; // If the input is regular
/**
 * To forbid user interaction with the input.
 *
 * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
*/
disabled?: boolean;
/**
 * The placeholder text displayed inside the input.
 *
 * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
*/
placeholder?: string;
/**
 * If passed, the fields will be validated.
 * Always set to true when a field is required.
 *
 * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
*/
isValidated?: boolean;
/**
 * The input type, can be all regular types + custom type 'email' with special validation rules.
 *
 * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
*/
type: TextInputType;
    /**
     * Label which will be displayed in the UI above the input.
     *
     * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
     */
label: string;
/**
 * Callback to pass the value to the parent.
 * This way state can be managed outside the component.
 *
 * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
*/
onInputChange: (value: string) => void; // Callback to pass the value to the parent
/**
 * Marks the field as required.
 * Once the field is marked as required, it cannot be left empty before form submit.
 * It will display an error message if empty.
 *
 * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
*/
required?: boolean;
/**
    * WARNING: This field should be unique for each field in the form.
    * Label for data identification.
    * Will be used in CustomForm.tsx to identify the field in the JSON object sent to onSubmit.
    * It is recommended that you provide this field to manage what data is sent to the server/API.
    * Otherwise, it will be inferred from the type of the input or a default value.
    *
    * 
     * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
*/
dataLabel?: string;
}

export interface CustomFormProps {
    /**
     * Children components rendered inside the form.
     * 
     * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
    */
    children: ReactNode;
    /**
     * Callback function to handle form submission with the values of all form fields.
     * 
     * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
    */
    onSubmit: (values: Record<string, any>) => void;
    /**
     * Reference to the toast manager for displaying action messages.
     * 
     * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
    */
    toastRef: React.RefObject<ToastHandle>;
}

export interface DatePickerProps {
    /**
     * Label which will be displayed in the UI above the input.
     *
     * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
    */
    label?: string;
    /**
     * Callback to notify parent when value of CustomDatePicker changes
     *
     * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
    */
    onDateChange: (value: string) => void;
    /**
     * If set to true, marks the field as required.
     * Once the field is marked as required, it cannot be left empty before form submit.
     * It will display an error message if empty
     *
     * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
    */
    required?: boolean;
    /**
     * Label for data identification.
     * Will be used in CustomForm.tsx to identify the field in the JSON object sent to onSubmit.
     * It is recommended that you provide this field to manage what data is sent to the server/API.
     * Otherwise, it will be inferred from the type of the input or a default value.
     * 
     * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
    */
    dataLabel?: string
}

export interface SelectProps {
    /**
     * Placeholder text for the first select element.
     * 
     * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
    */
    placeholder: string;
    /**
     * An array of option objects that define the values and labels for the dropdown menu
     * 
     * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
    */
    selectOptions: SelectOption[];
    /**
     * Callback function to notify the parent component whenever a value is selected
     * 
     * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
    */
    onSelectChange: (selectedValue: string | number) => void; // Callback to notify parent when a value is selected
    /**
     * If set to true, marks the field as required.
     * Once the field is marked as required, it cannot be left empty before form submit.
     * It will display an error message if empty
     *
     * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
     */
    required?: boolean;
    /**
     * Label for data identification.
     * Will be used in CustomForm.tsx to identify the field in the JSON object sent to onSubmit.
     * It is recommended that you provide this field to manage what data is sent to the server/API.
     * Otherwise, it will be inferred from the type of the input or a default value.
     * 
     * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
    */
    dataLabel?: string;
}

export interface SelectOption {
    value: string | number; // actual value of the select object
    label: string; // shown label of the select object
}