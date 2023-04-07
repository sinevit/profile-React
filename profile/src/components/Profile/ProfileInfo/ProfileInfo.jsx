
import classes from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return(
      <div>
        <div>
          <img className={classes.image} src='https://travelclub.kz/storage/tours/August2022/PPotdGnApSOgAdMnveS0.jpg' alt='japan' ></img>
        </div>
        <div className={classes.description}>
          ava + description
          {/* <img src='https://img.freepik.com/premium-vector/masked-samurai-girl-hand-drawn-illustration-vector_73644-9.jpg?w=2000' alt='samuray'></img> */}
        </div>
      </div>
    )
}