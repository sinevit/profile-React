import React from 'react';
import classes from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let onAddPosts = ()=> {
    props.addPosts();
  }

  let onChangePost = ()=> {
    let text = newPostElement.current.value;
    props.changePosts(text);
  }


    return(
      <div className={classes.postsBlock}>
        <h1>my posts </h1>
        <div>
          <div>
            <textarea onChange={onChangePost} ref={newPostElement} 
            value={props.newPostText}/>
          </div>
          <div>
            <button onClick={onAddPosts}>Add post</button>
          </div>
        </div>
        <div>
          {props.posts.map( post => <Post like={post.like} message={post.message} key={post.id}/>)}
        </div>
      </div>
    )
}