import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile) {
       return <Preloader />
    }
    return (
        <div className={classes.content}>
            {/*<div className={classes.hello}>*/}
            {/*    <img className={classes.profile_img}*/}
            {/*         src='https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg'*/}
            {/*         alt='imgHolder'/>*/}
            {/*</div>*/}
            {/*same as if statement above (<img src={props.profile?.photos.large} />)*/}
            <div>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={"Hello!"}/>
                <div>Facebook page: {props.profile.contacts.facebook}</div>
                <div>Github page: {props.profile.contacts.github}</div>
                <div>Full name: {props.profile.fullName}</div>
                <div>UserId: {props.profile.userId}</div>
                <div>Looking for a job description: {props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;
