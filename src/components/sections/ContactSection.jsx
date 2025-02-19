import Input from '../shared/Input';
import  useEditableSection  from '../shared/useEditableSection';
import  SaveEditButton  from '../shared/SaveEditButton';

import globalStyles from '../../styles/Global.module.css';

export function ContactSection({contacts, setContactInfo, mode}){
    console.log("ContactSection re-rendered") 
    const { tempData, isEditing, handleClick, handleChange} = useEditableSection(contacts,setContactInfo);
      
    if(mode==='display'){
        return(
            <div className="contactInformation">
                <h2>Contact Information</h2>
                {tempData.map(item => (
                    <div className={globalStyles.item} key={item.id}>
                        <p>Name: {item.name}</p>
                        <p>Email: {item.email}</p>
                        <p>Phone: {item.phone}</p>
                    </div>
                ))}
            </div>
        )
    }
    return(
    <fieldset className="contacts">
        <div className='contactInformation'>
            <h2>Contact Information</h2>
            
            {tempData.map(item => (
                <div className={globalStyles.item} key={item.id}>
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
