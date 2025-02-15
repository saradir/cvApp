import { useState } from 'react'
import {ContactSection, Education, JobExperience} from './components/Section'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContactSection />
      <Education />
      <JobExperience />
    </>
  )
}

export default App
