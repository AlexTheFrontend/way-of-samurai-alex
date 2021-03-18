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
    return (

        <div className={styles.d}>
            {/*{props.name} Dialogs*/}
            <div className={styles.dialogItems}>
                <DialogItem name={"Sergey"} id={"1"}/>
                <DialogItem name={"Dennis"} id={"2"}/>
                <DialogItem name={"Roman"} id={"3"}/>
                <DialogItem name={"Nadya"} id={"4"}/>
                <DialogItem name={"Dima"} id={"5"}/>
                <DialogItem name={"Julia"} id={"6"}/>
            </div>
            <div className={styles.messages}>
                <MessageItem message="Hello"/>
                <MessageItem message="Sup!"/>
                <MessageItem message="Bruuuuuuuu"/>
                <MessageItem message="Bruuuuuuuueeeeeee"/>
            </div>
        </div>


    )
}

export default Dialogs;

