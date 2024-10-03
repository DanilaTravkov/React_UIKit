import './App.css';
import { useRef, useState } from 'react';
import {
  CustomButton,
  CustomTextInput,
  CustomSelect,
  CustomGrid,
  CustomUserButton,
  CustomCheckBoxFactory,
  CustomRadioButtonFactory,
  CustomSearch,
  CustomToggleSwitch,
  ToastManager,
  CustomDatePicker,
  CustomForm,
} from './components/ui';

import { ContentCard } from './components/ui/ContentCard';
import userImg from './assets/dfbouue-a609b605-d553-4450-b56e-9cd707317231.jpg';
import otherUserImg from './assets/c1100b2ff0e4a9d76c536a2eca56a36a.jpg';
import natureImage from "./assets/nature-positive-thumbnail.jpg";
import { CheckBoxValue } from './components/ui/CustomCheckBoxFactory';
import { CustomDropDownMenu } from './components/ui/CustomDropDownMenu';
import { CustomModal } from './components/ui/CustomModal';

// const BASE_URL = "https://jsonplaceholder.typicode.com"

export type ToastHandle = {
  showToast: (message: string) => void;
};

function App()  {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string | number>();
  const [invokedModal, setInvokedModal] = useState<boolean>(true);
  const [toggleSwitch, setToggleSwitch] = useState<boolean>(true);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [checkboxData, setCheckboxData] = useState<CheckBoxValue[]>([
    { label: 'Check 1', isChecked: false },
    { label: 'Check 2', isChecked: false },
    { label: 'Check 3', isChecked: false }
  ]);
  const [selectedRadioValue, setSelectedRadioValue] = useState<string | number>();

  const selectOptions = [
    { value: "XS", label: "Extra small" },
    { value: "S", label: "Small" },
    { value: "M", label: "Medium" },
    { value: "L", label: "Large" },
    { value: "XL", label: "Extra large" }
  ];

  const RadioOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const DropDownMenuItems = [
    { label: "first link", link: "/" },
    { label: "second link", link: "/" },
    { label: "third link", link: "/" }
  ];

  const toastRef = useRef<ToastHandle>(null);

  const showToast = (message: string) => {
    if (toastRef.current) {
      toastRef.current.showToast(message);
    }
  };

  const handleSubmit = (formValues: Record<string, any>) => {
    console.log("Form submitted with values: ", formValues);
  };

  return (
    <div>
      <ToastManager ref={toastRef} />
      <CustomModal setInvoked={setInvokedModal} invoked={invokedModal} />

      <CustomForm toastRef={toastRef} onSubmit={handleSubmit}>
        <CustomDatePicker onDateChange={setSelectedDate} value={selectedDate} dataLabel="dateOfBirth" />
        <CustomTextInput required isValidated onInputChange={setInputValue} dataLabel="username" type="text" placeholder='Example: username1' label="Enter username" />
        <CustomTextInput required isValidated onInputChange={setInputValue} dataLabel="email" type="email" placeholder='Example: johndoe@gmail.com' label='Enter email' />
        <CustomTextInput required isValidated onInputChange={setInputValue} dataLabel="password" type='password' placeholder='Up to 12 symbols' label='Enter password' />
        <CustomSelect onSelectChange={setSelectValue} placeholder="Select size" selectOptions={selectOptions} />
        <CustomCheckBoxFactory onCheckBoxChange={setCheckboxData} values={checkboxData} />
        <CustomRadioButtonFactory onValueChange={setSelectedRadioValue} options={RadioOptions} />
        <CustomButton children={'Submit'} toastAction={() => showToast("Form submitted")} type="submit" primary />
      </CustomForm>

      <CustomSearch />
      <CustomToggleSwitch isSwitched={toggleSwitch} setIsSwitched={setToggleSwitch} />
      
      <ContentCard title="Content card" subheader='Subheader' img={natureImage} />
      <CustomUserButton userImg={userImg} />
      <CustomUserButton userImg={otherUserImg} />
      <CustomDropDownMenu header="Drop down menu" items={DropDownMenuItems} />
      <CustomGrid title='Grid title' rows={3} columns={3} />
    </div>
  );
}

export default App;
