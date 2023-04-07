import classes from '../Dialogs.module.css'

export const Message = (props) =>{
  return(
    <div className={classes.message}>{props.text}</div>
  )
}