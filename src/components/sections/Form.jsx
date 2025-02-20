import { useState } from 'react'
import {ContactSection } from '../sections/ContactSection'
import {EducationSection} from '../sections/EducationSection'
import {JobSection} from '../sections/JobSection'
import {v4 as uuidv4} from 'uuid';





export function Form(){

    const[mode, setMode] = useState('input');

    const [contactInfo, setContactInfo] = useState([
        {
        id: uuidv4(),
        name: "Adam Smith2",
        email: "",
        phone: ""
        }
        ]);

        const[educationItems, setEducationItems] = useState([
        {
            id: uuidv4(),
            school: '',
            subject: '',
            start: '',
            end: ''
        }
        ]);

        const[jobItems, setJobItems] = useState([
        {
            id: uuidv4(),
            companyName: '',
            jobName: '',
            jobDescription: '',
            startDate: '', 
            endDate: ''

        }
        ]);
    return (
        <form onSubmit={(e) => {e.preventDefault(); setMode('display')}}>
            <h1>CV Form</h1>
            <ContactSection 
                contacts={contactInfo}
                setContactInfo={setContactInfo}
                mode={mode}
                />
            <EducationSection
            educationItems={educationItems}
            setEducationItems={setEducationItems} 
            mode={mode} />
            <JobSection
                jobItems={jobItems}
                setJobItems={setJobItems}
                mode={mode}
            />
            {mode === 'input' && <button type="submit">Submit</button>}
            {mode === 'display' && <button onClick={() => setMode('input')}>Edit</button>}
            
        </form>
    )
}