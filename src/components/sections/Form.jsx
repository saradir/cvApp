import { useState } from 'react'
import {ContactSection } from '../sections/ContactSection'
import {EducationSection} from '../sections/EducationSection'
import {JobSection} from '../sections/JobSection'
import {v4 as uuidv4} from 'uuid';





export function Form(){

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
            jobTitle: '',
            roleDescription: '',
            startDate: '', 
            endDate: ''

        }
        ]);
    return (
        <form>
            <ContactSection 
                contacts={contactInfo}
                setContactInfo={setContactInfo}
                />
            <EducationSection
            educationItems={educationItems}
            setEducationItems={setEducationItems} />
            <JobSection
                jobItems={jobItems}
                setJobItems={setJobItems}
            />
        </form>
    )
}