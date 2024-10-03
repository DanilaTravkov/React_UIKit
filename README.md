<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">project_title</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

[![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get started you need to have started a React project, if you haven't then you can easily create a React project using Vite

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

<!-- ### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- <a href="#CustomButton">CustomButton</a>
- <a href="#CustomTextInput">CustomTextInput</a>
- <a href="#CustomButton">CustomForm</a>
- <a href="#CustomButton">CustomSelect</a>
- <a href="#CustomButton">CustomDatePicker</a>

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/github_username/repo_name/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=github_username/repo_name" alt="contrib.rocks image" />
</a>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Danila Travkov - [@telegram](https://t.me/daheatmaker) - datravkov@gmail.com

Project Link: [https://github.com/DanilaTravkov/React_UIKit](https://github.com/DanilaTravkov/React_UIKit)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


Here's a more polished and detailed version for the `CustomButton` documentation, complete with descriptions and enhanced formatting:

## Components

<h3 id="CustomButton">CustomButton.tsx</h3>

The `CustomButton` component is a versatile button that can be styled as a primary, secondary, ghost, or disabled button. It supports various functionalities such as triggering click events, form submission, and displaying toast messages.

#### **Props:**

```typescript
interface CustomButtonProps {
  /** Applies the primary button style */
  primary?: boolean;

  /** Applies the secondary button style */
  secondary?: boolean;

  /** Disables the button, preventing any user interaction */
  disabled?: boolean;

  /** Applies a ghost button style, making it minimally visible */
  ghost?: boolean;

  /** Defines the button type - button, submit, or reset */
  type: "button" | "submit" | "reset";

  /** Button label displayed as the inner text */
  children: string;

  /** Optional click handler for custom actions */
  onClick?: () => void;

  /** Optional action triggered for toast notifications */
  toastAction?: (toastRef: React.RefObject<any>) => void;
}
```

#### **Description:**

The `CustomButton` component provides several styles and functionalities to support different button use cases in the UI. It can serve as a clickable button, a form submitter, or even a reset button, depending on the `type` prop passed.

The `primary` and `secondary` props determine the button's appearance, while the `ghost` prop makes it more subtle, suitable for actions of lesser importance. The `disabled` prop, when set to `true`, disables the button, preventing any interactions.

#### **Usage Example:**

```tsx
<CustomButton 
  primary
  type="button"
  onClick={() => console.log("Primary Button Clicked!")}
>  
  Primary Button
</CustomButton>

<CustomButton 
  secondary 
  disabled 
  type="submit"
>
  Disabled Submit Button
</CustomButton>

<CustomButton 
  ghost
  type="reset"
>
  Reset
</CustomButton>
```

In the above example:

- The first button is styled as a **primary button** and logs a message to the console when clicked.
- The second button is a **disabled secondary button**, and it’s a form submit button.
- The third button is a **ghost button** used to reset form fields.

#### **Detailed Prop Descriptions:**

| Prop          | Type                                  | Description                                                                                   | Default Value |
| ------------- | ------------------------------------- | --------------------------------------------------------------------------------------------- | ------------- |
| **primary**   | `boolean`                             | Styles the button as a primary button with emphasized colors.                                 | `false`       |
| **secondary** | `boolean`                             | Styles the button as a secondary button, suitable for actions of secondary importance.        | `false`       |
| **disabled**  | `boolean`                             | Disables the button, preventing any interactions such as clicks or form submission.           | `false`       |
| **ghost**     | `boolean`                             | Styles the button as a ghost button, usually with a transparent background and light borders. | `false`       |
| **type**      | `"button" "submit" "reset"`          | Specifies the button type: standard button, form submission, or form reset.                   | `"button"`    |
| **children**  | `string`                              | The button label displayed as its inner text.                                                 | `""`          |
| **onClick**   | `() => void`                          | Optional click handler for the button. Executed when the button is clicked.                   | `undefined`   |
| **toastAction** | `(toastRef: React.RefObject<any>) => void` | Optional action triggered for displaying toast notifications. Note that this only works if the CustomToast component has been added.                                | `undefined`   |

---

### Additional Notes:
- **Styling Priorities:** The button will prioritize the `primary` prop styling over `secondary` if both are passed. If neither is set, it falls back to a default style.
- **Disabled State:** If the `disabled` prop is `true`, all click actions (`onClick` or `toastAction`) will be ignored, and the button will be visually indicated as disabled.
- **Toast Notifications:** If a `toastAction` is provided, it will trigger the toast notification logic, and the button must have access to a `toastRef` to display the message.

Here's a detailed and polished documentation for the `CustomTextInput` component, complete with explanations and usage examples:

---

<h3 id="CustomTextInput">CustomTextInput.tsx</h3>

The `CustomTextInput` component is a versatile input field designed to handle various input types such as text, password, email, and number. It provides support for validation, state management, and custom styling.

#### **Props:**

```typescript
interface TextInputProps {
  /** Applies a primary style to the input field */
  primary?: boolean;

  /** Applies a secondary style to the input field */
  secondary?: boolean;

  /** Disables the input field, preventing user interaction */
  disabled?: boolean;

  /** Placeholder text displayed inside the input field */
  placeholder?: string;

  /** If set to true, enables validation for this input */
  isValidated?: boolean;

  /** Defines the type of input - text, password, email, or number */
  type: "text" | "password" | "email" | "number";

  /** Label for the input field */
  label: string;

  /** Callback function to notify parent component of input changes */
  onInputChange: (value: string) => void;

  /** If true, marks the input field as required */
  required?: boolean;

  //** Will be used as the key for when the data is sent through onSubmit
  dataLabel?: string;
}
```

#### **Description:**

The `CustomTextInput` component offers a flexible input field with built-in validation support for various data types. It communicates changes to its parent component through the `onInputChange` callback and provides visual feedback when the `required` prop is set and the field is left empty.

The component can handle different input types such as text, email, password, and number. Validation logic is applied based on the `type` and `required` props. The input field can be disabled to prevent user interaction.

#### **Usage Example:**

```tsx
<CustomTextInput
  primary
  type="text"
  label="Enter your name"
  placeholder="John Doe"
  required
  onInputChange={(value) => console.log("Name:", value)}
  dataLabel="username"
/>

<CustomTextInput
  secondary
  type="email"
  label="Enter email"
  placeholder="example@mail.com"
  isValidated
  required
  onInputChange={(value) => console.log("Email:", value)}
/>

<CustomTextInput
  disabled
  type="password"
  label="Password"
  placeholder="Enter your password"
  onInputChange={(value) => console.log("Password:", value)}
/>
```

In the above example:

- The first input is a **primary text input** for the user's name, marked as a required field. It will log the entered value to the console on every change.
- The second input is a **secondary email input** with validation enabled. It will only accept properly formatted email addresses and log the value on change.
- The third input is a **disabled password input** that prevents any user interaction.

#### **Detailed Prop Descriptions:**

| Prop          | Type                                  | Description                                                                                                    | Default Value |
| ------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------- |
| **primary**   | `boolean`                             | Applies a primary style to the input, making it visually distinct and emphasized.                               | `false`       |
| **secondary** | `boolean`                             | Applies a secondary style, providing a less emphasized appearance compared to primary styling.                 | `false`       |
| **disabled**  | `boolean`                             | Disables the input field, preventing any user interaction such as typing or focusing on the input.              | `false`       |
| **placeholder** | `string`                            | Placeholder text displayed inside the input, providing a hint to the user about the expected value.             | `""`          |
| **isValidated** | `boolean`                           | Enables validation for the input field based on the specified `type` (e.g., email, number).                     | `false`       |
| **type**      | `"text" "password" "email" "number"` | Specifies the type of input field - text, password, email, or number.                                           | `"text"`      |
| **label**     | `string`                              | The label for the input field, describing its purpose or the type of data to be entered.                        | `""`          |
| **onInputChange** | `(value: string) => void`          | Callback function that notifies the parent component whenever the value of the input changes.                   | `undefined`   |
| **required**  | `boolean`                             | Marks the field as required, adding validation to ensure it is not empty before form submission.                | `false`       |
| **dataLabel**  | `string`                             | If passed, it will be used as a key in the JSON objects which is sent via onSubmit. It is recommended to always provide this prop, if not, it will be inferred from **type**.                | `""`       |

---

### **Validation Behavior:**

The `CustomTextInput` component has built-in validation support, which is enabled when the `isValidated` prop is set to `true`:

1. **For Email Input (`type="email"`):**
   - Ensures the input matches a typical email format (`example@domain.com`).
   - Displays an error message if the format is invalid or if the field is empty (when `required` is set).

2. **For Number Input (`type="number"`):**
   - Validates that the value is a numeric string of at least 10 digits (e.g., phone number).
   - Displays an error if the format is invalid or if the field is empty (when `required` is set).

3. **For Password Input (`type="password"`):**
   - Enforces a maximum length of 12 characters.
   - Displays an error if the length exceeds 12 characters or if the field is empty (when `required` is set).

4. **For Text Input (`type="text"`):**
   - Enforces a maximum length of 12 characters.
   - Displays an error if the length exceeds 12 characters or if the field is empty (when `required` is set).

### **Additional Notes:**

- **Handling Required Fields:**
  - When the `required` prop is set, the component will show an error if the input is empty.
  - The component will notify the parent about its validity using the `onInputChange` callback, allowing the parent component (e.g., a form) to track its state.

- **Styling Priorities:**
  - If both `primary` and `secondary` props are passed, the `primary` styling will take precedence.
  - The `disabled` prop overrides all other styles and functionalities, making the field non-interactive.

---

### **CustomForm.tsx**

The `CustomForm` component is a wrapper designed to handle form validation and submission logic for various custom input components, such as checkboxes, date pickers, radio buttons, selects, and text inputs. It ensures that all required fields are filled in correctly before enabling form submission and provides real-time feedback on form validity.

#### **Props:**

```typescript
interface CustomFormProps {
  /** Form children, which should be input components like CustomTextInput, CustomSelect, etc. */
  children: ReactNode;

  /** Callback function to handle form submission with the values of all form fields */
  onSubmit: (values: Record<string, any>) => void;

  /** Reference to the toast manager for displaying validation messages */
  toastRef: React.RefObject<ToastHandle>;
}
```

#### **Description:**

The `CustomForm` component acts as a form container that manages the state and validation of its child components. It tracks each child component's value, whether it is required, and if it is valid. Based on this state, it controls the form's overall validity, enabling or disabling the submit button.

The component communicates with each of its child components, listening for changes in their values and validation status. When all required fields are filled out correctly, the form is considered valid, and the submit button is enabled. If any required field is left empty or contains an invalid value, the submit button will remain disabled.

#### **Usage Example:**

```tsx
import React, { useRef } from 'react';
import { CustomForm } from './CustomForm';
import { CustomTextInput } from './CustomTextInput';
import { CustomSelect } from './CustomSelect';
import { CustomButton } from './CustomButton';
import { ToastManager, ToastHandle } from '../ToastManager';

const App = () => {
  const toastRef = useRef<ToastHandle>(null);

  const handleFormSubmit = (formValues: Record<string, any>) => {
    console.log("Form Submitted with values:", formValues);
  };

  const selectOptions = [
    { value: "XS", label: "Extra Small" },
    { value: "S", label: "Small" },
    { value: "M", label: "Medium" },
    { value: "L", label: "Large" },
    { value: "XL", label: "Extra Large" }
  ];

  return (
    <div>
      <ToastManager ref={toastRef} />
      <CustomForm onSubmit={handleFormSubmit} toastRef={toastRef}>
        <CustomTextInput
          required
          type="text"
          label="Enter your name"
          placeholder="John Doe"
          onInputChange={(value) => console.log("Name:", value)}
        />
        <CustomTextInput
          required
          type="email"
          label="Email Address"
          placeholder="example@mail.com"
          isValidated
          onInputChange={(value) => console.log("Email:", value)}
        />
        <CustomSelect
          required
          placeholder="Select size"
          selectOptions={selectOptions}
          onSelectChange={(value) => console.log("Selected size:", value)}
        />
        <CustomButton type="submit" primary>
          Submit Form
        </CustomButton>
      </CustomForm>
    </div>
  );
};

export default App;
```

In the above example:

- The form contains multiple required fields, including text inputs and a select dropdown.
- The submit button is only enabled when all required fields are filled correctly.
- If any required field is invalid or empty, a toast message will be displayed, and the button will remain disabled.

#### **Detailed Prop Descriptions:**

| Prop          | Type                                   | Description                                                                                 | Default Value |
| ------------- | -------------------------------------- | ------------------------------------------------------------------------------------------- | ------------- |
| **children**  | `ReactNode`                             | The form elements and buttons that make up the form structure.                               | `undefined`   |
| **onSubmit**  | `(values: Record<string, any>) => void` | Function to handle form submission when all required fields are valid.                       | `undefined`   |
| **toastRef**  | `React.RefObject<ToastHandle>`          | Reference to the toast manager for displaying messages related to form validation status.    | `undefined`   |

---

### **Form Validation and Submission Behavior**

The `CustomForm` component implements the following validation and submission logic:

1. **Handling Required Fields:**
   - Child components like `CustomTextInput`, `CustomSelect`, and others communicate their value and validation status to `CustomForm` using the `handleChildChange` function.
   - If any required field is empty or invalid, `CustomForm` will set its internal `isFormValid` state to `false`, which disables the submit button and prevents form submission.

2. **Real-Time Validation:**
   - The `CustomForm` component listens for changes in its child components' states.
   - Every time a child component's value or validity changes, `CustomForm` rechecks the validity of the entire form and updates its `isFormValid` state.

3. **Submit Button State Management:**
   - The `CustomButton` of type `submit` is disabled until the form is fully validated.
   - When all required fields are valid, the button becomes enabled, allowing the user to submit the form.

4. **Toast Notifications:**
   - The `toastRef` prop allows `CustomForm` to display toast messages related to form submission.
   - If the submit button is clicked and the form is invalid, a toast message will be displayed, informing the user that some fields are missing or incorrect.

### **Additional Notes:**

- **Field Validation Logic:**
  - Each child component, such as `CustomTextInput`, has its own validation logic, which determines whether it is valid or not. This logic can include type-specific validations like email format checking, number validation, or length restrictions.
  - The `CustomForm` only tracks and manages this state centrally but relies on the child components to perform their own validation.

- **Flexibility:**
  - The `CustomForm` component is designed to work seamlessly with all custom input components. It can support any number of child components, provided they are built to communicate their validation status and values to `CustomForm`.

- **Custom Actions:**
  - The `toastAction` prop on the `CustomButton` can be used to trigger toast messages specific to the form’s state, providing real-time feedback to the user.

Here’s a detailed and polished documentation for the `CustomToast` component (specifically the `ToastManager` and `Toast` components) based on the code you provided:

---

### **CustomToast (ToastManager)**

The `CustomToast` component provides a toast notification system to display temporary messages to users. It handles a maximum of 3 toast notifications at a time and supports smooth entry and exit animations. The toasts can be centered or aligned to the right depending on the configuration.

#### **Props:**

```typescript
interface ToastManagerHandle {
  /** Function to display a new toast with a message */
  showToast: (message: string) => void;
}

interface ToastManagerProps {
  /** Determines whether the toast notifications are centered or aligned to the right */
  alignCenter?: boolean;
}

interface ToastProps {
  /** The message content of the toast */
  message: string;

  /** The index of the toast (used for positioning) */
  index: number;

  /** Function to remove the toast from the DOM */
  onRemove: () => void;

  /** Whether to center the toast or align it to the right */
  alignCenter: boolean;

  /** Opacity for toast stacking (newer toasts are more opaque) */
  stackingOpacity: number;

  /** Whether the toast is currently being removed (used for animation) */
  isBeingRemoved?: boolean;
}
```

#### **Description:**

The `CustomToast` system consists of two main components:
- **`ToastManager`**: Manages the lifecycle of multiple toasts, ensuring that only 3 toasts are visible at a time. It exposes a `showToast` method that can be called to display new toast messages.
- **`Toast`**: Represents an individual toast notification, handling its appearance, stacking opacity, and smooth entry/removal animations.

The `ToastManager` can be centered or aligned to the right, depending on the `alignCenter` prop. New toasts will stack with reduced opacity, and the oldest toast will be automatically removed if a 4th toast is added.

#### **Usage Example:**

```tsx
import React, { useRef } from 'react';
import { ToastManager, ToastManagerHandle } from './ToastManager';

const App = () => {
  const toastRef = useRef<ToastManagerHandle>(null);

  const showNotification = () => {
    toastRef.current?.showToast("This is a new toast message!");
  };

  return (
    <div>
      <button onClick={showNotification}>Show Toast</button>
      <ToastManager ref={toastRef} alignCenter={false} />
    </div>
  );
};

export default App;
```

In this example:
- The `showNotification` function triggers the `showToast` method, displaying a new toast notification.
- The `ToastManager` is aligned to the right of the screen (`alignCenter={false}`), but can be centered if `alignCenter={true}` is passed.

#### **Detailed Prop Descriptions:**

##### **ToastManagerHandle:**

| Prop            | Type                                  | Description                                                              |
|-----------------|---------------------------------------|--------------------------------------------------------------------------|
| **showToast**   | `(message: string) => void`           | Method to display a toast with a given message.                          |

##### **ToastManagerProps:**

| Prop            | Type                                  | Description                                                              | Default Value |
|-----------------|---------------------------------------|--------------------------------------------------------------------------|---------------|
| **alignCenter** | `boolean`                             | Determines whether the toasts are centered or aligned to the right.       | `false`       |

##### **ToastProps:**

| Prop               | Type                                  | Description                                                                                     | Default Value |
|--------------------|---------------------------------------|-------------------------------------------------------------------------------------------------|---------------|
| **message**        | `string`                              | The message to be displayed inside the toast.                                                    | `""`          |
| **index**          | `number`                              | The index of the toast in the stack (used for positioning).                                      | `0`           |
| **onRemove**       | `() => void`                          | Callback to remove the toast from the DOM after it has been hidden.                              | `undefined`   |
| **alignCenter**    | `boolean`                             | If `true`, centers the toast; otherwise, aligns it to the right.                                 | `false`       |
| **stackingOpacity**| `number`                              | Controls the opacity of the toast relative to its position in the stack (newer toasts are brighter). | `1`           |
| **isBeingRemoved** | `boolean`                             | If `true`, triggers the removal animation for the toast.                                         | `false`       |

---

### **ToastManager (CustomToast) Behavior**

1. **Displaying Toast Messages:**
   - The `showToast` method is used to display a new toast with the given message.
   - Toast messages automatically disappear after 3 seconds, but the oldest toast is removed sooner if a 4th toast is added.

2. **Stacking Toasts:**
   - Up to 3 toast notifications are displayed at once. If a new toast is added while 3 are already visible, the oldest one is marked for removal and animates out.
   - Each toast has a decreasing opacity based on its position in the stack, giving the newer toasts more prominence.

3. **Animation and Transition:**
   - Toasts smoothly fade in and out with a combination of opacity and position transitions (`opacity`, `bottom`, and `transform`).
   - When a toast is removed, either due to timing out or making room for a new toast, a fade-out transition plays before the toast is removed from the DOM.

4. **Positioning:**
   - The `alignCenter` prop determines the position of the toast notifications:
     - If `true`, the toasts are centered horizontally at the bottom of the screen.
     - If `false`, they are aligned to the bottom-right corner.

---

### **Additional Notes:**

- **Toast Duration:** Each toast is displayed for 3 seconds, but this duration could be adjusted by modifying the timeout logic inside the `Toast` component.
- **Smooth Removal:** The system ensures smooth transitions when removing toasts, either when they time out or when a 4th toast is added, triggering the removal of the oldest one.
- **Ref Handling:** The `ToastManager` is accessed through a `ref`, allowing other components to trigger the display of toast messages by calling the `showToast` method.

Here’s a detailed and polished documentation for the `CustomSelect` component:

---

### **CustomSelect.tsx**

The `CustomSelect` component provides a styled dropdown menu that allows users to select a single option from a list of predefined values. It offers a customizable placeholder, supports various option values and labels, and notifies the parent component whenever a selection is made.

#### **Props:**

```typescript
interface SelectOption {
  /** The actual value of the select option */
  value: string | number;

  /** The label displayed to the user for this option */
  label: string;
}

interface SelectProps {
  /** Placeholder text displayed when no option is selected */
  placeholder: string;

  /** An array of option objects that define the values and labels for the dropdown menu */
  selectOptions: SelectOption[];

  /** Callback function to notify the parent component whenever a value is selected */
  onSelectChange: (selectedValue: string | number) => void;

  /** If true, marks the select component as required */
  required?: boolean;
}
```

#### **Description:**

The `CustomSelect` component provides a dropdown menu for users to select a value from a list of options. It features smooth animations, clear visual cues for selected options, and a placeholder text when no option is selected.

This component maintains its own state to track whether the dropdown is open or closed, and it keeps track of the currently selected option. The selected value is communicated to the parent component through the `onSelectChange` callback.

The component is styled using utility classes defined in the `classStrings` module and utilizes an SVG arrow icon to indicate the dropdown state. When an option is selected, the dropdown closes, and the selected option's label is displayed as the dropdown header.

#### **Usage Example:**

```tsx
import React, { useState } from 'react';
import { CustomSelect } from './CustomSelect';

const App = () => {
  const [selectValue, setSelectValue] = useState<string | number>();

  const selectOptions = [
    { value: "XS", label: "Extra small" },
    { value: "S", label: "Small" },
    { value: "M", label: "Medium" },
    { value: "L", label: "Large" },
    { value: "XL", label: "Extra large" },
  ];

  return (
    <div>
      <CustomSelect
        placeholder="Select size"
        selectOptions={selectOptions}
        onSelectChange={(value) => {
          setSelectValue(value);
          console.log("Selected Size:", value);
        }}
      />
      <p>Selected Size: {selectValue}</p>
    </div>
  );
};

export default App;
```

In the above example:

- The `CustomSelect` component is rendered with a list of size options (`XS`, `S`, `M`, etc.).
- When the user selects an option, the selected value is displayed below the dropdown, and the `onSelectChange` callback logs the selected value to the console.

#### **Detailed Prop Descriptions:**

| Prop             | Type                                      | Description                                                                                      | Default Value |
|------------------|-------------------------------------------|--------------------------------------------------------------------------------------------------|---------------|
| **placeholder**  | `string`                                   | Placeholder text displayed in the dropdown header when no option is selected.                     | `""`          |
| **selectOptions**| `{ value: string \| number; label: string; }[]` | An array of objects representing the options available in the dropdown menu. Each option has a `value` and a `label`. | `[]`          |
| **onSelectChange** | `(selectedValue: string \| number) => void` | Callback function that is called whenever an option is selected, passing the selected value.      | `undefined`   |
| **required**     | `boolean`                                  | If true, marks the select component as a required field, but the actual required logic must be handled by the parent component or form. | `false`       |

---

### **Component Behavior:**

1. **Initial Display:**
   - The component displays the `placeholder` text in the dropdown header when no option is selected.

2. **Dropdown State:**
   - Clicking on the dropdown header toggles the `isOpen` state, which controls whether the dropdown options are visible or not.
   - The dropdown header displays an arrow icon (`arrowDown.svg`) that rotates when the dropdown is opened.

3. **Selecting an Option:**
   - When an option is clicked, it is set as the `selectedOption`, the dropdown closes, and the `onSelectChange` callback is triggered with the selected value.

4. **Option Styling:**
   - The options are styled using utility classes (`optionStyles`), and the selected option’s label is displayed in the dropdown header.

5. **Stacking and Overflow Handling:**
   - The dropdown list can handle a large number of options, with the potential to implement scrolling or overflow handling for longer lists if required.

### **Additional Notes:**

- **Required Field Handling:**
  - If the `required` prop is passed to the `CustomSelect`, it should be used in conjunction with a form or parent component that manages validation. The `CustomSelect` itself does not enforce validation but communicates its state to the parent.

- **Responsive Design:**
  - The component is styled to be responsive and adaptable to different layouts. You can customize its styles using additional utility classes if needed.

- **Extending Functionality:**
  - If you need multi-select capabilities, the component can be extended to handle an array of selected values instead of a single value. This would involve changes to the state management and UI logic.

  Here's a detailed and polished documentation for the `CustomCheckBoxFactory` component based on the code provided:

---

### **CustomCheckBoxFactory Component**

The `CustomCheckBoxFactory` component provides a group of custom-styled checkboxes with unified behavior and state management. It allows users to select or deselect multiple options, and it communicates the current state of each checkbox back to the parent component through a callback function.

#### **Props:**

```typescript
interface CheckBoxValue {
  /** The label displayed next to each checkbox */
  label: string;

  /** Indicates whether the checkbox is checked or not */
  isChecked: boolean;
}

interface CheckBoxFactoryProps {
  /** Array of checkbox objects that define their labels and checked status */
  values: CheckBoxValue[];

  /** Callback function to notify the parent component whenever a checkbox is checked or unchecked */
  onCheckBoxChange: (updatedValues: CheckBoxValue[]) => void;

  /** If true, marks the checkbox group as required (to be used with form validation) */
  required?: boolean;
}
```

#### **Description:**

The `CustomCheckBoxFactory` component renders a group of checkbox inputs, each with a label and custom styling. The component maintains an internal state for the checked status of each checkbox and sends updates to the parent component using the `onCheckBoxChange` callback whenever a checkbox is toggled.

This component is useful when you have multiple checkbox options that need to be grouped together with consistent behavior. For example, a list of preferences or a set of filter options in a form.

The checkboxes are styled using utility classes defined in the `classStrings` module, and animations are used to provide visual feedback for user interactions.

#### **Usage Example:**

```tsx
import React, { useState } from 'react';
import { CustomCheckBoxFactory, CheckBoxValue } from './CustomCheckBoxFactory';

const App = () => {
  const [checkboxData, setCheckboxData] = useState<CheckBoxValue[]>([
    { label: 'Check 1', isChecked: false },
    { label: 'Check 2', isChecked: false },
    { label: 'Check 3', isChecked: false },
  ]);

  const handleCheckBoxChange = (updatedValues: CheckBoxValue[]) => {
    setCheckboxData(updatedValues);
    console.log("Updated Checkboxes:", updatedValues);
  };

  return (
    <div>
      <CustomCheckBoxFactory
        values={checkboxData}
        onCheckBoxChange={handleCheckBoxChange}
        required
      />
      <div>
        {checkboxData.map((item, index) => (
          <p key={index}>{`${item.label}: ${item.isChecked ? "Checked" : "Unchecked"}`}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
```

In the above example:

- The `CustomCheckBoxFactory` is rendered with a set of initial checkboxes (`Check 1`, `Check 2`, `Check 3`).
- When a checkbox is toggled, the `handleCheckBoxChange` function updates the `checkboxData` state and logs the updated values to the console.

#### **Detailed Prop Descriptions:**

| Prop                | Type                                     | Description                                                                                   | Default Value |
|---------------------|------------------------------------------|-----------------------------------------------------------------------------------------------|---------------|
| **values**          | `CheckBoxValue[]`                        | An array of objects representing each checkbox with its label and checked status.             | `[]`          |
| **onCheckBoxChange**| `(updatedValues: CheckBoxValue[]) => void`| Callback function that is triggered whenever a checkbox is toggled, passing the updated state.| `undefined`   |
| **required**        | `boolean`                                | Marks the checkbox group as required. To be used in combination with a form validation logic. | `false`       |

---

### **Component Behavior:**

1. **Initial State:**
   - The component initializes its internal state (`checkBoxValues`) using the `values` prop, which determines the initial checked status of each checkbox.

2. **Handling Checkbox Changes:**
   - When a checkbox is clicked, the `handleCheckboxChange` function updates the internal state of the checkbox group.
   - The `onCheckBoxChange` callback is called with the updated checkbox values, allowing the parent component to synchronize its state.

3. **Visual Styling and Animations:**
   - Each checkbox is styled using custom classes defined in `classStrings`.
   - Checkboxes use the `animate-pulse` class when they are unchecked, providing a subtle visual cue to the user.

4. **Managing Multiple Checkboxes:**
   - The component can handle any number of checkboxes and updates the state of the entire group whenever a single checkbox is toggled.

5. **Required Field Handling:**
   - If the `required` prop is set, it indicates that the checkbox group is required for form validation, but the actual required logic must be implemented in the parent component or form.

### **Additional Notes:**

- **State Management:**
  - The internal state of the `CustomCheckBoxFactory` component is managed through the `checkBoxValues` state variable. This state is derived from the `values` prop and is updated whenever a checkbox is clicked.

- **Form Integration:**
  - The `CustomCheckBoxFactory` component is designed to be integrated into forms that need to track multiple checkboxes.
  - To implement validation or enforce the `required` prop, this component should be used with a parent form component that tracks its state and handles form submission.

- **Customization:**
  - The component’s styling can be easily customized by modifying the utility classes defined in `classStrings`.
  - Additional features such as limiting the number of selectable checkboxes or enabling/disabling individual checkboxes can be added as needed.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/


