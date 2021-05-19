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
//                   dialogsPage={state}
//               />);
//         }
//       }
//       </StoreContext.Consumer>
//
//   );
// }

let mapStateToProps = (state) => {
  return {
    // Data from state (which is Store before)
    messagesPage: state.messagesPage,
    isAuth: state.auth.isAuth,
  };
}



let mapDispatchToProps = (dispatch) => {
  return {
  //  callback F
    sendMessage: () => dispatch(sendMessageCreator()),
    updateNewMessageBody: (body) => dispatch(updateNewMessageBodyCreator(body)),
  };
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;

