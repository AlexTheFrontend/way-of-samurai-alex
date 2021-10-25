import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormControls/FormControls";
import {required} from "../../Utils/Validators/validators";
import {connect} from "react-redux";
import {getCaptchaURL, login} from "../../Redux/authReducer";
import {Redirect} from "react-router";
import styles from "../Common/FormControls/FormControls.module.scss"

const LoginForm = ({handleSubmit, error, captchaURL}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                       name={"email"}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       name={"password"}
                       type="password"
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field component="input" name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            {captchaURL && <img src={captchaURL}/>}
            {captchaURL && createField("Symbols from an image", "captcha", [required], Input, {})}
            { error && <div className={styles.formsError}>
                {error}
            </div> }
            <div>
                <button>Log in</button>
            </div>
        </form>)
}

const LoginReduxForm = reduxForm({
    // a unique name
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha )
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
    </div>
}

const mapStateToProps = (state) => ({
    captchaURL: state.auth.captchaURL,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);
