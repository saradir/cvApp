import { useState } from 'react'
import {ContactSection, Education, JobExperience} from './components/Section'
import './App.css'
import {v4 as uuidv4} from 'uuid';

function App() {
  const [contactInfo, setContactInfo] = useState([
    {
    id: uuidv4(),
    name: "Adam Smith2",
    email: "",
    phone: ""
    }
  ]);




  return (
    <form>
      <ContactSection 
        contacts={contactInfo}
        setContactInfo={setContactInfo}
         />
      <Education />
      <JobExperience />
    </form>
  )
}

export default App
