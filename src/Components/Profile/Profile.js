import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {


  return (
      <div className={classes.content}>
        <ProfileInfo/>
        {/*we send path through props from MyPosts */}
        {/*we take a data from profilePage (state) array*/}
        <MyPostsContainer store={props.store} />
      </div>
  );
}

export default Profile;
