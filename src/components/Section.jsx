import Input from './Input';


function handleChange(e){
     e.target.value = e.target.textContent;
}

export function ContactSection({isActive, contacts}){
    return(
    <fieldset className="contacts">

        <h2>Contact Information</h2>
        <Input label="Name" defaultValue={contacts.name} readOnly={!(isActive==="contactSection")}  />
        <Input label="Email address" type="email" defaultValue={contacts.email} readOnly={!(isActive==="contactSection")} />
        <Input label="Phone Number" type="tel" defaultValue={contacts.phone} readOnly={!(isActive==="contactSection")} />
        <button>
            {isActive==="contactSection"? "Save": "Edit"}
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


export function Education(){
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