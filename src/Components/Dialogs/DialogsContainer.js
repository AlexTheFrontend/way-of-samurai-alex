import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    // Data from state (which is Store before)
    messagesPage: state.messagesPage,
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
  //  callback F
    sendMessage: () => dispatch(sendMessageCreator()),
    updateNewMessageBody: (body) => dispatch(updateNewMessageBodyCreator(body)),
  };
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;

