import { ProfileStatus } from "./ProfileStatus/ProfileStatus"
import classes from './ProfileInfo.module.css'
import { Field, reduxForm } from "redux-form"
import { Input, Textarea } from "../../common/FormsControls/FormControls"

export const ProfileDataForm = ({ handleSubmit, profile, status, updateStatus, isOwner, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {!isOwner && <div><button > save</button></div>}
            {error && <div className={classes.error}>
                {error}
            </div>}
            <div>
                <b>Full name</b>: <Field component={Input} name={'fullName'}
                    placeholder={"full name"} validate={[]} />
            </div>
            <div>
                <b>Looking for a job</b>: <Field component={Input} name={'lookingForAJob'}
                    validate={[]} type={'checkbox'} />
            </div>
            <div>
                <b>My professional skills</b>:  <Field component={Textarea} name={'lookingForAJobDescription'}
                    placeholder={"my skills"} validate={[]} />
            </div>
            <div>
                <b>About me</b>: <Field component={Textarea} name={'aboutMe'} placeholder={"about me"}
                    validate={[]} />
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return (<div key={key} className={classes.contact}>
                        <b>{key}</b>: <Field component={Input} name={`contacts.${key}`}
                            placeholder={key} validate={[]} />
                    </div>)
                }
                )}
            </div>
            <ProfileStatus status={status} updateStatus={updateStatus} />
        </form>
    )
}

export const ProfileReduxForm = reduxForm({
    form: 'profile'
})(ProfileDataForm)