import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// import StoreContext from "../../StoreContext";

// debugger;
// const DialogsContainer = () => {
//
//   return (<StoreContext.Consumer>
//         {
//         (store) => {
//           let state = store.getState().messagesPage;
//
//           let onSendMessageClick = () => {
//             store.dispatch(sendMessageCreator())
//           }
//
//           let onNewMessageChange = (body) => {
//             store.dispatch(updateNewMessageBodyCreator(body))
//           }
//
//           return (
//               <Dialogs
//                   updateNewMessageBody={onNewMessageChange}
//                   sendMessage={onSendMessageClick}
//                   dialogPage={state}
//               />);
//         }
//       }
//       </StoreContext.Consumer>
//
//   );
// }

const mapStateToProps = (state) => {
  return {
    // Data from state (which is Store before)
    dialogPage: state.dialogPage,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  //  callback F
    updateNewMessageBody: (body) => dispatch(updateNewMessageBodyCreator(body)),
    sendMessage: () => dispatch(sendMessageCreator()),
  };
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

