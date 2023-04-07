import React from 'react';
import { DialogItem } from './DialogItem.jsx/DialogItem'
import classes from './Dialogs.module.css'
import { Message } from './Message/Message'


export const Dialogs = (props) => {
  let newMessageText = React.createRef();

  const onSendMessage = () => {
    props.dispatch({type:'SEND-MESSAGE'})
  }
  const onChangeMessage = (e) =>{
    let message = e.target.value;
    props.dispatch({type: 'CHANGE-MESSAGE', newMessageText: message})
  }
  return(
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {props.dialogsPage.dialogs.map( dialog => <DialogItem name={dialog.name} key={'d'+dialog.id}/>)}
      </div>
      <div className={classes.messages}>
        {props.dialogsPage.messages.map(t => <Message text={t.message} />)}
        <div>
          <textarea onChange={onChangeMessage} ref={newMessageText}
          value={props.dialogsPage.newMessageText} placeholder='Enter your message'/>
        </div>
        <div><button onClick={onSendMessage}>Send</button></div>
      </div>
    </div>
  )
}