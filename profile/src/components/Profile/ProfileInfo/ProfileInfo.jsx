
import { Preloader } from '../../common/Preloader/Preloader'
import classes from './ProfileInfo.module.css'
import { ProfileStatus } from './ProfileStatus/ProfileStatus'

export const ProfileInfo = ({profile, status, updateStatus }) => {
    if(!profile){
      return <Preloader />
    }

    return(
      <div>
        {/* <div>
          <img className={classes.image} src='https://travelclub.kz/storage/tours/August2022/PPotdGnApSOgAdMnveS0.jpg' alt='japan' ></img>
        </div> */}
        <div className={classes.description}>
          <img src={profile.photos.large} alt='samuray'></img>
          <ProfileStatus status={status}  updateStatus={updateStatus} />
        </div>
      </div>
    )
}