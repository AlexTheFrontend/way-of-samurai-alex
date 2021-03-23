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

    let dialogsData = [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Dennis'},
        {id: 3, name: 'Roman'},
        {id: 4, name: 'Nadya'},
        {id: 5, name: 'Dima'},
        {id: 6, name: 'Julia'},
    ]

    let messageList = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Sup!'},
        {id: 3, message: 'Bruuuuuuuu'},
        {id: 4, message: 'Bruuuuuuuueeeeeee'},
        {id: 5, message: 'Bruuuuuuuueeeeeeadsadade'},
        {id: 6, message: 'Bruuuuuuuueeeeeeasdasdasdasdade'},
    ]


    return (

        <div className={styles.d}>
            {/*{props.name} Dialogs*/}
            <div className={styles.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={styles.messages}>
                <MessageItem message={messageList[0].message}/>
                <MessageItem message={messageList[1].message}/>
                <MessageItem message={messageList[2].message}/>
                <MessageItem message={messageList[3].message}/>
                <MessageItem message={messageList[4].message}/>
                <MessageItem message={messageList[5].message}/>
            </div>
        </div>


    )
}

export default Dialogs;

