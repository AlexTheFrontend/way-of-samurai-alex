import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import Avatar from "../../../Pictures/Avatar.jpeg";

const ProfileInfo = ({profile, updateStatus, status, isOwner, saveAvatar}) => {
    if (!profile) {
       return <Preloader />
    }

    const onMainAvatarSelected = (e) => {
        if (e.target.files.length) {
            saveAvatar(e.target.files[0])
        }
    }

    return (
        <div className={classes.content}>
            <div>
                <img style={{width: 200, borderRadius: 20}} src={!profile.photos.large ? Avatar : profile.photos.large} alt={"User's Avatar"} />
                {isOwner && <input style={{display: 'block', marginTop: 10, marginBottom: 10}} type={"file"}
                onChange={onMainAvatarSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div style={{marginTop: 10}}>Facebook page: {profile.contacts.facebook}</div>
                <div>Github page: {profile.contacts.github}</div>
                <div>Full name: {profile.fullName}</div>
                <div>UserId: {profile.userId}</div>
                <div>Looking for a job description: {profile.lookingForAJobDescription}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;
