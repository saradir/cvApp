import Input from './Input';

export function ContactSection(){
    return(
    <section className="contacts">

        <h2>Contact Information</h2>
        <Input label="Name" />
        <Input label="Email address" type="email" />
        <Input label="Phone Number" type="tel" />
        <button>
            Edit
        </button>

    </section>
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
        <section className='education'>

            <h2>Education</h2>
            <EducationItem />
            <button>
                Add education
            </button>
            <button>
                Edit
            </button>
        </section>
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


export function WorkExperience(){

    return(
        <section className="workExperience">
            <h2>Work Experience</h2>
            <JobItem />
            <button>
                Add a job
            </button>
            <button>
                Edit
            </button>

        </section>
    );
}