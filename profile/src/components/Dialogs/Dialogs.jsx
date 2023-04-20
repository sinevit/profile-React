import React from 'react';
import { Navigate } from 'react-router-dom';
import { DialogItem } from './DialogItem.jsx/DialogItem'
import classes from './Dialogs.module.css'
import { Message } from './Message/Message'
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormControls';
import { maxLengthCreator, required } from '../../utils/validate';


export const Dialogs = (props) => {

    const addMessage = (values) => {
        props.sendMessage(values.newMessageText);
    }
    // if (!props.isAuth) return <Navigate to={'/login'} />

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} />)}
            </div>
            <div className={classes.messages}>
                {props.dialogsPage.messages.map(t => <Message text={t.message} key={t.id} />)}
                <MessageFormRedux onSubmit={addMessage} />
            </div>
        </div>
    )
}
const maxLength10 = maxLengthCreator(10);

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newMessageText'}
                    placeholder='Enter your message' 
                    validate={[required, maxLength10]}/>
            </div>
            <div>
                <button >Send</button>
            </div>
        </form>)
}

const MessageFormRedux = reduxForm({ form: 'messageForm' })(MessageForm)