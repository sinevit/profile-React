import { MyPosts } from './MyPosts/MyPosts'
import classes from './Profile.module.css'

export const Profile = () => {
    return(
      <div>
          <img alt='japan' src='https://travelclub.kz/storage/tours/August2022/PPotdGnApSOgAdMnveS0.jpg'></img>
        <div className={classes.content__ava}>
          {/* <img src='https://img.freepik.com/premium-vector/masked-samurai-girl-hand-drawn-illustration-vector_73644-9.jpg?w=2000' alt='samuray'></img> */}
        </div>
        <MyPosts />
      </div>
    )
}