
import { Preloader } from '../../common/Preloader/Preloader'
import classes from './ProfileInfo.module.css'
import { ProfileStatus } from './ProfileStatus/ProfileStatus'

export const ProfileInfo = (props) => {
    if(!props.profile){
      return <Preloader />
    }

    return(
      <div>
        {/* <div>
          <img className={classes.image} src='https://travelclub.kz/storage/tours/August2022/PPotdGnApSOgAdMnveS0.jpg' alt='japan' ></img>
        </div> */}
        <div className={classes.description}>
          <img src={props.profile.photos.large} alt='samuray'></img>
          <ProfileStatus status={props.status}  updateStatus={props.updateStatus} />
        </div>
      </div>
    )
}