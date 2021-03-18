import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div className={classes.content}>
            <div className={classes.hello}>
                <img className={classes.profile_img}
                     src='https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg'
                     alt='imgHolder'/>
            </div>
            <div>
                Ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;
