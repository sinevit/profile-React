
import React from 'react'
import { Preloader } from '../../common/Preloader/Preloader'
import classes from './ProfileInfo.module.css'
import { ProfileStatus } from './ProfileStatus/ProfileStatus'
import ava from '../../../assets/images/ava.png'
import { useState } from 'react'
import { ProfileReduxForm } from './ProfileDataForm'

export const ProfileInfo = ({ profile, isOwner, savePhoto, status, updateStatus, saveProfile }) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then( () => {
            setEditMode(false)
        }
        )
    }


    return (
        <div>
            <div className={classes.description}>
                <img src={profile.photos.large || ava} alt='samuray' className={classes.mainPhoto}></img>
                {!isOwner && <input type={"file"} onChange={onPhotoSelected}></input>}

                {!editMode
                    ? <ProfileData profile={profile} isOwner={isOwner}
                        goToEditMode={() => setEditMode(true)}
                        status={status} updateStatus={updateStatus} />
                    : <ProfileReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />}
            </div>
        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode, status, updateStatus }) => {
    return (
        <div>
            {!isOwner && <div><button onClick={goToEditMode}> edit</button></div>}
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}
            </div>
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key =>

                    <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />)}
            </div>
            <ProfileStatus status={status} updateStatus={updateStatus} />
        </div>
    )
}

export const Contact = ({ contactTitle, contactValue }) => {
    return <div className={classes.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}