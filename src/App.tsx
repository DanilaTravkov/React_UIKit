import './App.css'
// import { useFetch } from './hooks/useFetch';
import { CustomButton, TextInput, CustomSelect, CustomGrid } from './components/ui';
import { ContentCard } from './components/ui/ContentCard';

const BASE_URL = "https://jsonplaceholder.typicode.com"

function App()  {

  // const {isLoading, fetchError, posts} = useFetch(BASE_URL, { page: 1 })

  const selectOptions = [
    { value: "S", label: "Small" },
    { value: "M", label: "Medium" },
    { value: "L", label: "Large" }
  ]

  return (
    <div className="h-screen">
      <CustomButton primary>Primary button</CustomButton>
      <CustomButton secondary>Secondary button</CustomButton>
      <TextInput type="text" label="Enter username" />
      <TextInput type="email" label='Enter email' />
      <CustomSelect placeholder="Select size" selectOptions={selectOptions} />
      <ContentCard title="Content card" />
      <CustomGrid title='Grid title' rows={3} columns={3} />
      
    </div>
  )
}

export default App
