import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import Avatar from "../../../Pictures/Avatar.jpeg";

const ProfileInfo = ({profile, updateStatus, status}) => {
    if (!profile) {
       return <Preloader />
    }
    return (
        <div className={classes.content}>
            <div>
                <img style={{width: 200, borderRadius: 20}} src={!profile.photos.large ? Avatar : profile.photos.large} alt={"User's Avatar"} />
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
