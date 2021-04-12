import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/State";

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

  // creating local variable for props
  let state = props.store.getState().messagesPage;

  // with props.messages I am taking data from the level above
  let dialogsElement = state.dialogs
      .map(d => <DialogItem name={d.name} id={d.id}/>);

  // with props.messages I am taking data from the level above
  let messageElement = state.messages
      .map(m => <MessageItem message={m.message} id={m.id}/>);

  let newMessageBody = state.newMessageBody;


  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text)
  }

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  let onNewMessageChange = (e) => {
   let body = e.target.value;
   props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return (

      <div className={styles.d}>
        <div className={styles.dialogItems}>
          {dialogsElement}
        </div>
        <div className={styles.messages}>
          <div>{messageElement}</div>
          <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder={'Type your message here'}
              ref={newMessageElement}
          />
          <div>
            <button onClick={onSendMessageClick}>Add message</button>
          </div>
        </div>
      </div>


  )
}

export default Dialogs;

