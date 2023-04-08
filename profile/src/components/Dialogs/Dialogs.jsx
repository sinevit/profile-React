import React from 'react';
import { DialogItem } from './DialogItem.jsx/DialogItem'
import classes from './Dialogs.module.css'
import { Message } from './Message/Message'


export const Dialogs = (props) => {
  
  let newMessageText = React.createRef();

  const onSendMessage = () => {
    props.sendMessage();
  }
  const onChangeMessage = (e) =>{
    let message = e.target.value;
    props.changeMessage(message);
  }
  return(
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {props.dialogsPage.dialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id}/>)}
      </div>
      <div className={classes.messages}>
        {props.dialogsPage.messages.map(t => <Message text={t.message} key={t.id} />)}
        <div>
          <textarea onChange={onChangeMessage} ref={newMessageText}
          value={props.dialogsPage.newMessageText} placeholder='Enter your message'/>
        </div>
        <div><button onClick={onSendMessage}>Send</button></div>
      </div>
    </div>
  )
}