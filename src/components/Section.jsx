/* eslint-disable react/prop-types */
import { useState, useCallback, memo } from 'react';
import Input from './shared/Input';
import PropTypes from 'prop-types';

function SaveEditButton({isEditing, handleClick}){
    return(
        <button type="button" className={isEditing? "save-button": "edit-button"} onClick={handleClick}>
        {isEditing? "Save": "Edit"}
        </button>
    )
}

function useEditableSection(initialData, setGlobalData){
    console.log(typeof initialData, initialData);

    const [tempData, setTempData] = useState(initialData.map(item => ({...item})));
    const [isEditing, setEditing] = useState(false);

    function handleClick(){
        // Save mode
        if(isEditing){
            setGlobalData([
                ...tempData
            ]);
            setEditing(false);            
        }else{
            setTempData(initialData.map(item => ({...item})));
            setEditing(true);
        }
    }

    const handleChange = useCallback((e, id) => {
        setTempData(prevData => 
            prevData.map((item) =>
            item.id === id ?
            {
            ...item,
            [e.target.name]: e.target.value
            }
            :item)
        )
    }, []);

    return { tempData, isEditing, handleClick, handleChange}
}

export function ContactSection({contacts, setContactInfo}){
    console.log("ContactSection re-rendered") 
    const { tempData, isEditing, handleClick, handleChange} = useEditableSection(contacts,setContactInfo);
      
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
            ))}
        </div>

        <SaveEditButton isEditing={isEditing} handleClick={handleClick} />
    </fieldset>
    )
}

const EducationItem = memo(function EducationItem({id, schoolName='', subject='', startDate='', endDate='', isEditing, handleChange}){        
    return(
        <div className='EducationItem' id={id}>
            <Input label="School" name='school' value={schoolName} disabled={!(isEditing)} onChange={(e) => handleChange(e,id)}  />
            <Input label="Subject" name='subject' value={subject} disabled={!(isEditing)} onChange={(e) => handleChange(e,id)} />
            <Input label="Start" type="date" name='start' value={startDate} disabled={!(isEditing)} onChange={(e) => handleChange(e,id)}/>
            <Input label="End" type="date" name='end' value={endDate} disabled={!(isEditing)} onChange={(e) => handleChange(e,id)} />
        </div>
    );
});

export function EducationSection({educationItems, setEducationItems}){
    const {tempData, isEditing, handleClick, handleChange} = useEditableSection(educationItems,setEducationItems);
    console.log("EducationSection re-rendered") 

    return(
        <fieldset className='education'>
            <h2>Education</h2>
            <div className='education-items'>
                {tempData.map( item => (
                    <EducationItem key={item.id} id={item.id} schoolName={item.school} subject={item.subject} startDate={item.start} endDate={item.end} isEditing={isEditing} handleChange={handleChange} />
                ))}
            </div>
            <button>
                Add education
            </button>
            <SaveEditButton isEditing={isEditing} handleClick={handleClick} />
        </fieldset>
    )
}

export function JobSection({jobItems, setJobItems}){
    const {tempData, isEditing, handleClick, handleChange} = useEditableSection(jobItems,setJobItems);
    console.log("JobSection re-rendered") 

    return(
        <fieldset className='job-section'>
            <h2>Skills</h2>
            <div className='job-items'>
                {tempData.map( item => (
                    <Input key={item.id} label="Skill" name="job" value={item.skill} disabled={!(isEditing)} onChange={(e) => handleChange(e,item.id)} />
                ))}
            </div>
            <button>
                Add skill
            </button>
            <SaveEditButton isEditing={isEditing} handleClick={handleClick} />
        </fieldset>
    )
}