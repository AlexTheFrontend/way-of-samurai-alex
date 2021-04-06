import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    // with props.messages I am taking data from the level above
    let dialogsElement = props.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    // with props.messages I am taking data from the level above
    let messageElement = props.messages
        .map(m => <MessageItem message={m.message} id={m.id}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    }

    return (

        <div className={styles.d}>
            <div className={styles.dialogItems}>
                {dialogsElement}
            </div>
            <div className={styles.messages}>
                {messageElement}
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>


    )
}

export default Dialogs;

