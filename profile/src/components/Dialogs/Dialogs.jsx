import { DialogItem } from './DialogItem.jsx/DialogItem'
import classes from './Dialogs.module.css'
import { Message } from './Message/Message'


export const Dialogs = (props) => {
  return(
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {props.state.data.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}
      </div>
      <div className={classes.messages}>
        {props.state.text.map(t => <Message text={t.message} />)}
      </div>
    </div>
  )
}