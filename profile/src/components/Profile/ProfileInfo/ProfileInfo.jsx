
import { Preloader } from '../../common/Preloader/Preloader'
import classes from './ProfileInfo.module.css'

export const ProfileInfo = (props) => {
    if(!props.profile){
      return <Preloader />
    }

    return(
      <div>
        <div>
          <img className={classes.image} src='https://travelclub.kz/storage/tours/August2022/PPotdGnApSOgAdMnveS0.jpg' alt='japan' ></img>
        </div>
        <div className={classes.description}>
          ava + description
          <img src={props.profile.photos.large} alt='samuray'></img>
        </div>
      </div>
    )
}