import React from 'react';
import { connect } from 'react-redux';
import { MyPosts } from './MyPosts';
import {changePosts ,addPosts } from '../../../redux/profile-reducer'


let mapStateToProps = (state) => {

  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}


export const MyPostsContainer = connect(mapStateToProps, {addPosts, changePosts })(MyPosts)