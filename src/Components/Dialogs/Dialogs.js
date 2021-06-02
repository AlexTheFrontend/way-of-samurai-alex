import React from 'react';
import styles from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Redirect} from "react-router";

const Dialogs = (props) => {

  // creating local variable for props
  let state = props.messagesPage;

  // with props.messages I am taking data from the level above
  let dialogsElements = state.dialogs
      .map(d => <DialogsItem name={d.name} id={d.id}/>);

  // with props.messages I am taking data from the level above
  let messageElements = state.messages
      .map(m => <Message message={m.message} id={m.id}/>);

  let addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody);
  }

    const AddMessageForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <Field component={"textarea"} name="newMessageBody" placeholder="Please enter your message" />
                <div>
                    <button>Add message</button>
                </div>
            </form>
        )
    }

    const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

    // if (!props.isAuth) return <Redirect to={"/login"} />;

  return (

      <div className={styles.d}>
        <div className={styles.dialogItems}>
          {dialogsElements}
        </div>
        <div className={styles.messages}>
          <div>{messageElements}</div>
        </div>
          <AddMessageFormRedux onSubmit={addNewMessage}/>

      </div>
  )
}

export default Dialogs;

