import React from 'react';
import classes from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let addPosts = ()=> {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

    return(
      <div className={classes.postsBlock}>
        <h1>my posts </h1>
        <div>
          <div>
            <textarea ref={newPostElement}></textarea>
          </div>
          <div>
            <button onClick={addPosts}>Add post</button>
          </div>
        </div>
        <div>
          {props.posts.map( post => <Post like={post.like} message={post.message}/>)}
        </div>
      </div>
    )
}