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

    let dialogs = [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Dennis'},
        {id: 3, name: 'Roman'},
        {id: 4, name: 'Nadya'},
        {id: 5, name: 'Dima'},
        {id: 6, name: 'Julia'},
    ];

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Sup!'},
        {id: 3, message: 'Bruuuuuuuu'},
        {id: 4, message: 'Bruuuuuuuueeeeeee'},
        {id: 5, message: 'Bruuuuuuuueeeeeeadsadade'},
        {id: 6, message: 'Bruuuuuuuueeeeeeasdasdasdasdade'},
        {id: 7, message: 'Blyyyyaaaat'},
        {id: 8, message: 'Dennis'},
    ];

    let dialogsElement = dialogs
        .map( d => <DialogItem name={d.name} id={d.id}/> );


    let messageElement = messages
        .map( m => <MessageItem message={m.message} id={m.id}/> );

    return (

        <div className={styles.d}>
            <div className={styles.dialogItems}>
                { dialogsElement }
            </div>
            <div className={styles.messages}>
                { messageElement }
            </div>
        </div>


    )
}

export default Dialogs;

