import { useState } from 'react'
import {ContactSection, Education, JobExperience} from './components/Section'
import './App.css'

function App() {
  const [isActive, setIsActive] = useState('contactSection');
  const [contactInfo, setContactInfo] = useState({
    name: "sampl",
    email: "",
    phone: ""
  })

  return (
    <form>
      <ContactSection 
        isActive={isActive} 
        contacts={contactInfo} />
      <Education />
      <JobExperience />
    </form>
  )
}

export default App
