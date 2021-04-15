import React from 'react';
import styles from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  // creating local variable for props
  let state = props.dialogPage;

  // with props.messages I am taking data from the level above
  let dialogsElements = state.dialogs
      .map(d => <DialogsItem name={d.name} id={d.id}/>);

  // with props.messages I am taking data from the level above
  let messageElements = state.messages
      .map(m => <Message message={m.message} id={m.id}/>);

  let newMessageBody = state.newMessageBody;
  //
  // let newMessageElement = React.createRef();

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
   let body = e.target.value;
   props.updateNewMessageBody(body);
  }

  return (

      <div className={styles.d}>
        <div className={styles.dialogItems}>
          {dialogsElements}
        </div>
        <div className={styles.messages}>
          <div>{messageElements}</div>
          <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder={'Type your message here'}
          />
          <div>
            <button onClick={onSendMessageClick}>Add message</button>
          </div>
        </div>
      </div>


  )
}

export default Dialogs;

