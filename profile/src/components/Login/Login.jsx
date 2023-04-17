import { Field, reduxForm } from "redux-form"
import { Input } from "../common/Preloader/FormsControls/FormControls"
import { maxLengthCreator, required } from "../../utils/validate"

const maxLength10 = maxLengthCreator(10);
export const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'login'} 
                placeholder={"Login"} validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field component={Input} name={'password'} 
                placeholder={"Password"} validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export const Login = () => {
    const onSubmit =(formData) => {
        console.log(formData)
    }

    return (
    <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>)
}