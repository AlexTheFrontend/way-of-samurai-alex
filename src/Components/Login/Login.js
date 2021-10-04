import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormControls/FormControls";
import {required} from "../../Utils/Validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router";
import styles from "../Common/FormControls/FormControls.module.scss"

const LoginForm = ({handleSubmit, error}) => {
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
        props.login(formData.email, formData.password, formData.rememberMe )
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);
