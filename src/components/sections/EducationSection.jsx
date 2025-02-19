/* eslint-disable react/prop-types */
import {  memo } from 'react';
import Input from '../shared/Input.jsx';
import useEditableSection from '../shared/useEditableSection';
import SaveEditButton from '../shared/SaveEditButton.jsx';

const EducationItem = memo(function EducationItem({id, schoolName='', subject='', startDate='', endDate='', isEditing, handleChange, handleRemove}){        
    return(
        <div className='EducationItem' id={id}>
            <Input label="School" name='school' value={schoolName} disabled={!(isEditing)} onChange={(e) => handleChange(e,id)}  />
            <Input label="Subject" name='subject' value={subject} disabled={!(isEditing)} onChange={(e) => handleChange(e,id)} />
            <Input label="Start" type="date" name='start' value={startDate} disabled={!(isEditing)} onChange={(e) => handleChange(e,id)}/>
            <Input label="End" type="date" name='end' value={endDate} disabled={!(isEditing)} onChange={(e) => handleChange(e,id)} />

            <button type="button" onClick={() => handleRemove(id)} disabled={!(isEditing)}>
                Remove
            </button>
        </div>
    );
});

export function EducationSection({educationItems, setEducationItems}){
    const {tempData, isEditing, handleClick, handleChange, handleRemove, handleAdd} = useEditableSection(educationItems,setEducationItems);
    console.log("EducationSection re-rendered") 

    return(
        <fieldset className='education'>
            <h2>Education</h2>
            <div className='education-items'>
                {tempData.map( item => (
                    <EducationItem
                        key={item.id}
                        id={item.id}
                        schoolName={item.school}
                        subject={item.subject}
                        startDate={item.start}
                        endDate={item.end}
                        isEditing={isEditing}
                        handleChange={handleChange}
                        handleRemove={handleRemove} />
                ))}

            </div>
            <button type='button' onClick={handleAdd}>
                Add education
            </button>
            <SaveEditButton isEditing={isEditing} handleClick={handleClick} />
        </fieldset>
    )
}