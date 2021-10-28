import React, {useEffect, useState} from 'react';
import styles from './ProfileInfo.module.css';

export const ProfileStatusWithHooks = (props) => {

    const {status, updateStatus} = props

    //without destructorisation
    // let stateWithSetState = useState(false);
    // let editMode = stateWithSetState[0];
    // let setEditMode = stateWithSetState[1];

    const [editMode, setEditMode] = useState(false)
    const [statusHook, setStatusHook] = useState(status)

    useEffect(() => {
        setStatusHook(status)
    }, [status])

    // entering edit mode
    const activateEditMode = () => {
        setEditMode(true)
    }

    // closing edit mode
    const deactivateEditMode = () => {
        setEditMode(false)
        updateStatus(statusHook)
    }

    const onStatusChange = (e) => {
        setStatusHook(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode && <div>
                    <span className={styles.status}
                          onClick={activateEditMode}>{status || 'No status yet, please enter something!'}</span>
            </div>}

            {editMode && <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                       value={statusHook}/>
            </div>
            }
        </div>
    );
}


