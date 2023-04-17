import { connect } from 'react-redux';
import { MyPosts } from './MyPosts';
import { addPosts } from '../../../redux/profile-reducer'


let mapStateToProps = (state) => {

  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}


export const MyPostsContainer = connect(mapStateToProps, {addPosts})(MyPosts)