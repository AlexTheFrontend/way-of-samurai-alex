import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

// debugger;
const DialogsContainer = () => {

  return (<StoreContext.Consumer>
        {
        (store) => {
          let state = store.getState().messagesPage;

          let onSendMessageClick = () => {
            store.dispatch(sendMessageCreator())
          }

          let onNewMessageChange = (body) => {
            store.dispatch(updateNewMessageBodyCreator(body))
          }

          return (
              <Dialogs
                  updateNewMessageBody={onNewMessageChange}
                  sendMessage={onSendMessageClick}
                  dialogPage={state}
              />);
        }
      }
      </StoreContext.Consumer>

  );
}

export default DialogsContainer;

