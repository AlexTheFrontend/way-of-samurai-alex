import React from 'react';
import styles from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    // creating local variable for props
    let state = props.messagesPage;

    // with props.messages I am taking data from the level above
    let dialogsElements = state.dialogs
        .map(d => <DialogsItem name={d.name} id={d.id} key={d.id}/>);

    // with props.messages I am taking data from the level above
    let messageElements = state.messages
        .map(m => <Message message={m.message} id={m.id} key={m.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    // if (!props.isAuth) return <Redirect to={"/login"} />;

    return (

        <div className={styles.container}>
            <div>
                <h2>Links to user's profiles</h2>
                <div className={styles.dialogItems}>
                    {dialogsElements}
                </div>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
            <div className={styles.messages}>
                <div>{messageElements}</div>
            </div>


        </div>
    )
}

export default Dialogs;

