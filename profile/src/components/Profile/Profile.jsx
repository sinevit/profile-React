import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import classes from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

export const Profile = (props) => {
    return(
      <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer />
      </div>
    )
}