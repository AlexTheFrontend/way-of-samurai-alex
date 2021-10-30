import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import Avatar from "../../../Pictures/Avatar.jpeg";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, updateStatus, status, isOwner, saveAvatar, saveProfile}) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainAvatarSelected = (e) => {
        if (e.target.files.length) {
            saveAvatar(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div className={classes.content}>
            <div>
                <img style={{width: 200, borderRadius: 20}} src={!profile.photos.large ? Avatar : profile.photos.large}
                     alt={"User's Avatar"}/>
                {isOwner && <input style={{display: 'block', marginTop: 10, marginBottom: 10}} type={"file"}
                                   onChange={onMainAvatarSelected}/>}
                {!!status && <div style={{padding: 5, paddingLeft: 10, fontWeight: "bold"}}>Status:</div>}
                {!!status && <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>}

                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>
                }
            </div>
        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        <div style={{marginTop: 10}}><b>Full name:</b> {profile.fullName}</div>
        <div><b>UserId:</b> {profile.userId}</div>
        <div><b>Looking for a job:</b> {profile?.lookingForAJob ? 'Yes' : 'No'}</div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        }
        <div><b>About me</b>: {profile.aboutMe}</div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
        {isOwner && <div style={{marginTop: 10}}>
            <button className={classes.editProfile} onClick={goToEditMode}>Edit Profile</button>
        </div>}
    </div>

}

const Contacts = ({contactTitle, contactValue}) => {
    return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
