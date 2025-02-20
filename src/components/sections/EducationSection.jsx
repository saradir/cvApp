/* eslint-disable react/prop-types */
import {  memo } from 'react';
import Input from '../shared/Input.jsx';
import useEditableSection from '../shared/useEditableSection';
import SaveEditButton from '../shared/SaveEditButton.jsx';

//css
import globalStyles from '../../styles/Global.module.css';

const EducationItem = memo(function EducationItem({id, schoolName='', subject='', startDate='', endDate='', isEditing, handleChange, handleRemove, mode='display'}){        
       
    return(
        <div className={globalStyles.item} id={id}>
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

export function EducationSection({educationItems, setEducationItems, mode='input'}){
    const {tempData, isEditing, handleClick, handleChange, handleRemove, handleAdd} = useEditableSection(educationItems,setEducationItems);
    console.log("EducationSection re-rendered") 

    if(mode === 'display'){
        return(
            <div className={[globalStyles.education, globalStyles.display].join(' ')}>
                <h2>Education</h2>
                {tempData.map(item => (
                    <div className={[globalStyles.item, globalStyles.display].join(' ')} key={item.id}>
                        <p><span className={globalStyles.label}>School:</span> {item.school}</p>
                        <p><span className={globalStyles.label}>Subject:</span> {item.subject}</p>
                        <p><span className={globalStyles.label}>Start:</span> {item.start}</p>
                        <p><span className={globalStyles.label}>End:</span> {item.end}</p>
                    </div>
                ))}
            </div>
        )
    }
    return(
        <fieldset className='education'>
            <h2>Education</h2>
            <div className={globalStyles.inputGroup}>
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
            <div className={globalStyles.buttonGroup}>
                <button type='button' disabled={!(isEditing)} onClick={handleAdd}>
                    Add education
                </button>
                <SaveEditButton isEditing={isEditing} handleClick={handleClick} />
            </div>
        </fieldset>
    )
}