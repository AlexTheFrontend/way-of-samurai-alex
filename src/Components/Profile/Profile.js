import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {


    return (
        <div className={classes.content}>
            <ProfileInfo/>
            {/*we send path through props from MyPosts */}
            {/*we take a data from profilePage (state) array*/}
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     addNewPost={props.addNewPost}
            />
        </div>
    );
}

export default Profile;
