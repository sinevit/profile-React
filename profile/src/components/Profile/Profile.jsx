import { MyPosts } from './MyPosts/MyPosts'
import classes from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

export const Profile = (props) => {

    return(
      <div>
        <ProfileInfo />
        <MyPosts posts={props.state.posts} addPost={props.addPost}/>
      </div>
    )
}