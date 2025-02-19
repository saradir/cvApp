/* eslint-disable react/prop-types */
import  {  memo } from 'react';
import Input from '../shared/Input.jsx';
import useEditableSection from '../shared/useEditableSection';
import SaveEditButton from '../shared/SaveEditButton.jsx';


const JobItem = memo(function JobItem({id, jobName='', startDate='', endDate='',jobDescription='', isEditing, handleChange, handleRemove}){
    return(
        <div className='JobItem' id={id}>
            <Input label="Job" name='job' value={jobName} disabled={!(isEditing)} onChange={(e) => handleChange(e,id)}  />
            <Input label="Start" type="date" name='start' value={startDate} disabled={!(isEditing)} onChange={(e) => handleChange(e,id)}/>
            <Input label="End" type="date" name='end' value={endDate} disabled={!(isEditing)} onChange={(e) => handleChange(e,id)} />
            <label>
                Description:
                <textarea id="jobDescription" name="jobDescription" value={jobDescription} rows="5" cols="50" disabled={!(isEditing)} onChange={(e) => handleChange(e,id)}>
                </textarea>

            </label>

            <button type="button" onClick={() => handleRemove(id)} disabled={!(isEditing)}>
                Remove
            </button>

            
        </div>
    );
}); 

export function JobSection({jobItems, setJobItems}){
    const {tempData, isEditing, handleClick, handleChange, handleRemove, handleAdd} = useEditableSection(jobItems,setJobItems);
    console.log("JobSection re-rendered") 

    return(
        <fieldset className='job-section'>
            <h2>Work Experience</h2>
            <div className='job-items'>
                {tempData.map( item => (
                    <JobItem 
                        key={item.id}
                        id={item.id}
                        jobName={item.job}
                        startDate={item.start}
                        endDate={item.end}
                        isEditing={isEditing}
                        handleChange={handleChange}
                        handleRemove={handleRemove}/>

                ))}
            </div>
            <button type='button' onClick={handleAdd}>
                Add Job
            </button>
            <SaveEditButton isEditing={isEditing} handleClick={handleClick} />
        </fieldset>
    )
}