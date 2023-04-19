import { Field, reduxForm } from "redux-form"
import { Input } from "../common/Preloader/FormsControls/FormControls"
import { maxLengthCreator, required } from "../../utils/validate"
import { connect } from "react-redux";
import { login } from '../../redux/auth-reducer'
import { Navigate } from "react-router";

const maxLength10 = maxLengthCreator(20);
export const LoginForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>

            <Field component={Input} name={'email'} 
            placeholder={"Login"} validate={[required, maxLength10]}/>

            <Field component={Input} name={'password'} type={'password'}
            placeholder={"Password"} validate={[required, maxLength10]}/>

            <Field component={Input} name={'rememberMe'} type={'checkbox'}/>remember me
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
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Navigate to={'/profile'} />
    }

    return (
    <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>)
}

const mapStateToProps = (state)=> ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login})(Login)