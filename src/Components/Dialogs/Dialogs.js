import React from 'react';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={styles.d}>
            {props.name} Dialogs
        </div>
    )
}

export default Dialogs;

