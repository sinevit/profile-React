import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

export const Profile = ({profile, isOwner, status, updateStatus,savePhoto }) => {
    return(
      <div>
        <ProfileInfo profile={profile} status={status} 
        updateStatus={updateStatus} isOwner={isOwner}
        savePhoto={savePhoto}/>
        <MyPostsContainer />
      </div>
    )
}