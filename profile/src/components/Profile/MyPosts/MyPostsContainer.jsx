import React from 'react';
import { connect } from 'react-redux';
import { MyPosts } from './MyPosts';


let mapStateToProps = (state) => {

  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch)=>{

  return {  
    addPosts: () => dispatch({type: "ADD-POST"}),
    changePosts: (text) => dispatch({type: "CHANGE-POST", newPostText: text})
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)