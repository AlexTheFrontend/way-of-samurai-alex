import React from 'react';
// import classes from './ProfileInfo.module.css';
// import Preloader from "../../Common/Preloader/Preloader";

const ProfileStatus = (props) => {

    return (
        <div>
            <div>
                <span>{props.status}</span>
            </div>
            <div>
                <input value={props.status}/>
            </div>
        </div>
    );
}

export default ProfileStatus;
