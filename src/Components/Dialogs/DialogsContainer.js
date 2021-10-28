import {sendMessageCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        // Data from state (which is Store before)
        messagesPage: state.messagesPage,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        //  callback F
        sendMessage: (newMessageBody) => dispatch(sendMessageCreator(newMessageBody)),
    };
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

