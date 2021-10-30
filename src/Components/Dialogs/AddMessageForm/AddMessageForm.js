import {maxLengthCreator, required} from "../../../Utils/Validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormControls/FormControls";
import React from "react";
import classes from "../Dialogs.module.css"


const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={classes.textField} component={Textarea} name="newMessageBody" placeholder="Please enter your message"
                   validate={[required, maxLength50]}/>
            <div>
                <button className={classes.addMessage}>Add new message</button>
            </div>
        </form>
    )
}

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)


