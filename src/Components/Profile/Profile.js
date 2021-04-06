import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {



  return (
    <div className={classes.content}>
      <ProfileInfo />
      {/*we send path through props from MyPosts */}
      <MyPosts posts={props.posts}/>
    </div>
  );
}

export default Profile;
