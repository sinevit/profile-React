import classes from './Friend.module.css'
export const Friend = (props) => {
    return(
      <div className={classes.friend}>
        <div className={classes.circle}></div>
        <span className="">{props.name}</span>
      </div>
    )
}