
import { Preloader } from '../../common/Preloader/Preloader'
import classes from './ProfileInfo.module.css'
import { ProfileStatus } from './ProfileStatus/ProfileStatus'
import ava from '../../../assets/images/userPhoto.jpg'

export const ProfileInfo = ({profile, isOwner, status, updateStatus, savePhoto }) => {
    if(!profile){
      return <Preloader />
    }

    const onPhotoSelected = (e) =>{
      if(e.target.files.length){
        savePhoto(e.target.files[0])
      }
    }

    return(
      <div>
        {/* <div>
          <img className={classes.image} src='https://travelclub.kz/storage/tours/August2022/PPotdGnApSOgAdMnveS0.jpg' alt='japan' ></img>
        </div> */}
        <div className={classes.description}>
          <img src={profile.photos.large || ava} alt='samuray' className={classes.mainPhoto}></img>
          {!isOwner && <input type={"file"} onChange={onPhotoSelected}></input>}
          <ProfileStatus status={status}  updateStatus={updateStatus} />
        </div>
      </div>
    )
}