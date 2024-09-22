import './App.css'
import { useState } from 'react';
// import { useFetch } from './hooks/useFetch';
import { CustomButton, CustomTextInput, CustomSelect, CustomGrid, CustomUserButton, CustomCheckBoxFactory, CustomRadioButtonFactory, CustomSearch } from './components/ui';
import { ContentCard } from './components/ui/ContentCard';
import userImg from './assets/dfbouue-a609b605-d553-4450-b56e-9cd707317231.jpg';
import otherUserImg from './assets/c1100b2ff0e4a9d76c536a2eca56a36a.jpg'
import natureImage from "./assets/nature-positive-thumbnail.jpg";
import { CheckBoxValue } from './components/ui/CustomCheckBoxFactory';
import { CustomDropDownMenu } from './components/ui/CustomDropDownMenu';

const BASE_URL = "https://jsonplaceholder.typicode.com"

function App()  {

  // const {isLoading, fetchError, posts} = useFetch(BASE_URL, { page: 1 })

  const selectOptions = [
    { value: "XS", label: "Extra small" },
    { value: "S", label: "Small" },
    { value: "M", label: "Medium" },
    { value: "L", label: "Large" },
    { value: "XL", label: "Extra large" }
  ]

  const [checkboxData, setCheckboxData] = useState<CheckBoxValue[]>([
    { label: 'Check 1', isChecked: false },
    { label: 'Check 2', isChecked: false },
    { label: 'Check 3', isChecked: false }
  ]);
  const [selectedRadioValue, setSelectedRadioValue] = useState<string | null>(null);


const RadioOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
]

const DropDownMenuItems = [
  { label: "first link", link: "/" },
  { label: "second link", link: "/" },
  { label: "third link", link: "/" }
]

const handleCheckBoxChange = (updatedValues: CheckBoxValue[]) => {
    // Update the parent component's state when checkboxes change
    setCheckboxData(updatedValues);
};

const handleRadioChange = (value: string) => {
  setSelectedRadioValue(value);
}

  return (
    <div>
      <CustomButton primary>Primary button</CustomButton>
      <CustomButton secondary>Secondary button</CustomButton>
      <CustomTextInput isValidated type="text" placeholder='Example: username1' label="Enter username" />
      <CustomTextInput isValidated type="email" placeholder='Example: johndoe@gmail.com' label='Enter email' />
      <CustomTextInput isValidated type='password' placeholder='Up to 12 symbols' label='Enter password' />
      <CustomSelect placeholder="Select size" selectOptions={selectOptions} />
      <CustomSearch />
      <CustomCheckBoxFactory onCheckBoxChange={handleCheckBoxChange} values={checkboxData} />
      <CustomRadioButtonFactory onValueChange={handleRadioChange} options={RadioOptions} />
      <p className='m-4'>{`Selected radio: ${selectedRadioValue}`}</p>
      <ContentCard title="Content card" subheader='Subheader' img={natureImage} />
      <CustomUserButton userImg={userImg}/>
      <CustomUserButton userImg={otherUserImg}/>
      <CustomDropDownMenu header="Drop down menu" items={DropDownMenuItems} />
      <CustomGrid title='Grid title' rows={3} columns={3} />
    </div>
  )
}

export default App
