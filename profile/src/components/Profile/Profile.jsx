import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

export const Profile = ({profile, isOwner, status, updateStatus, savePhoto, saveProfile }) => {
    return(
      <div>
        <ProfileInfo profile={profile} status={status} 
        updateStatus={updateStatus} isOwner={isOwner}
        savePhoto={savePhoto} saveProfile={saveProfile}/>
        <MyPostsContainer />
      </div>
    )
}