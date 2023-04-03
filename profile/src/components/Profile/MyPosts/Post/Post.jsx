import classes from './Post.module.css'

export const Post = (props) => {
    return(
      <div className={classes.item}>
      <img src="https://e7.pngegg.com/pngimages/749/802/png-clipart-shadow-fight-ninja-berdychiv-kusarigama-illya-shadow-fight-2-avatar-city-cartoon.png" alt="avatar" />
      { props.message }
      <div>
        <span>like</span>
        <span>{ props.like }</span>
      </div>
    </div>
    )
}