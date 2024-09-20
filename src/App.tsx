import './App.css'
// import { useFetch } from './hooks/useFetch';
import { CustomButton, TextInput, CustomSelect, CustomGrid } from './components/ui';
import { ContentCard } from './components/ui/ContentCard';

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

  return (
    <div className="h-screen">
      <CustomButton primary>Primary button</CustomButton>
      <CustomButton secondary>Secondary button</CustomButton>
      <TextInput type="text" placeholder='Example: username1' label="Enter username" />
      <TextInput type="email" placeholder='Example: johndoe@gmail.com' label='Enter email' />
      <TextInput type='password' placeholder='Up to 12 symbols' label='Enter password' />
      <CustomSelect placeholder="Select size" selectOptions={selectOptions} />
      <ContentCard title="Content card" />
      <CustomGrid title='Grid title' rows={4} columns={4} />
      
    </div>
  )
}

export default App
