import { MyPosts } from './MyPosts/MyPosts'
import classes from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

export const Profile = (props) => {
    return(
      <div>
        <ProfileInfo />
        <MyPosts posts={props.profilePage.posts} 
                  addPost={props.addPost}
                  changePost={props.changePost}
                  newPostText={props.profilePage.newPostText}/>
      </div>
    )
}