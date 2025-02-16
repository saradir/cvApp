/* eslint-disable react/prop-types */
import { useState } from 'react';
import Input from './Input';
import PropTypes from 'prop-types';
import {v4 as uuidv4} from 'uuid';



function useEditableSection(initialData, setGlobalData){
    const [tempData, setTempData] = useState([initialData.map(item => ({...item}))]);
    const [isEditing, setEditing] = useState(false);

    function handleClick(){
        // Save mode
        if(isEditing){
            setGlobalData([
                ...tempData
            ]);
            setEditing(false);            
        }else{
            setTempData([initialData.map(item => ({...item}))]);
            setEditing(true);
        }
    }

    function handleChange(e, id) {
        setTempData(tempData.map((item) =>
            item.id === id ?
            {
            ...item,
            [e.target.name]: e.target.value
            }
            :item)
        )
    }

    return { tempData, isEditing, handleClick, handleChange}
}
export function ContactSection({contacts, setContactInfo}){

    const { tempData, isEditing, handleClick, handleChange} = useEditableSection(contacts,setContactInfo);
  

    /*
    function handleClick(){
        console.log('handling click');
        // save
        if(isEditing){
            setContactInfo({
                ...tempContacts
            });
            setEditing('');
            console.log(`saved ${tempContacts}`);
            
        }else{
            setTempContacts({...contacts});
            setEditing("contactSection");

        }
    }
    function handleChange(e) {
        setTempContacts({
            ...tempContacts,
            [e.target.name]: e.target.value
        })
    }

    */
    
    return(
    <fieldset className="contacts">
        <div className='contactInformation'>
            <h2>Contact Information</h2>
            {tempData.map(item => (
                <div key={item.id}>
                    <Input label="Name" name="name" value={item.name} disabled={!(isEditing)} onChange={(e) => handleChange(e,item.id)}  />
                    <Input label="Email address" name="email" type="email" value={item.email} disabled={!(isEditing)} onChange={(e) => handleChange(e,item.id)} />
                    <Input label="Phone Number" name="phone" type="tel" value={item.phone} disabled={!(isEditing)} onChange={(e) => handleChange(e,item.id)} />
                </div>
))};
        </div>

        <button type="button" className={isEditing? "save-button": "edit-button"} onClick={handleClick}>
            {isEditing? "Save": "Edit"}
        </button>
    </fieldset>
    )
}


export function EducationItem({schoolName='', subject='', startDate='', endDate=''}){
    return(

        <div className='EducationItem'>
            <Input label="School" />
            <Input label="Subject" />
            <Input label="Start" type="date"/>
            <Input label="End" type="date" />

        </div>
    );
}


export function Education(educationItems, setEducationItems){

    //const [tempEducation, isEditing, handleClick, handleChange] = useEditableSection(educationItems,setEducationItems);

    return(
        <fieldset className='education'>

            <h2>Education</h2>

            <EducationItem />
            <button>
                Add education
            </button>
            <button>
                Edit
            </button>
        </fieldset>
    )
}


export function JobItem({companyName= '', position='', description='', startDate ='', endDate=''}){
    return(
        <div className="JobItem">
            <Input label="Company name" />
            <Input label="Position title" />
            <Input label="Job Description" />
            <Input label="Start" type="date" />
            <Input label="End" type="date" />

        </div>
    );
}


export function JobExperience(){

    return(
        <fieldset className="job-experience">
            <h2>Job Experience</h2>
            <JobItem />
            <button>
                Add a job
            </button>
            <button>
                Edit
            </button>

        </fieldset>
    );
}