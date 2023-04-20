import { Field, reduxForm } from "redux-form"
import { Input } from "../common/FormsControls/FormControls"
import { maxLengthCreator, required } from "../../utils/validate"
import { connect } from "react-redux";
import { login, getCaptchaUrl } from '../../redux/auth-reducer'
import { Navigate } from "react-router";

const maxLength10 = maxLengthCreator(30);
export const LoginForm = ({handleSubmit, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>

            <Field component={Input} name={'email'} 
            placeholder={"Login"} validate={[required, maxLength10]}/>

            <Field component={Input} name={'password'} type={'password'}
            placeholder={"Password"} validate={[required, maxLength10]}/>

            <Field component={Input} name={'rememberMe'} type={'checkbox'}/>remember me
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl &&  <Field component={Input} name={'captcha'}
            placeholder={"Symbols from image"} validate={[required]}/>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit =(formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth){
        return <Navigate to={'/profile'} />
    }

    return (
    <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>)
}

const mapStateToProps = (state)=> ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, {login, getCaptchaUrl})(Login)