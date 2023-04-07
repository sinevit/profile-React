import React from 'react';
import classes from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let addPosts = ()=> {
    props.dispatch({type: "ADD-POST"});
  }

  let changePost = ()=> {
    let text = newPostElement.current.value;
    props.dispatch({type: "CHANGE-POST", newPostText: text});
  }

    return(
      <div className={classes.postsBlock}>
        <h1>my posts </h1>
        <div>
          <div>
            <textarea onChange={changePost} ref={newPostElement} 
            value={props.newPostText}/>
          </div>
          <div>
            <button onClick={addPosts}>Add post</button>
          </div>
        </div>
        <div>
          {props.posts.map( post => <Post like={post.like} message={post.message} id={post.id}/>)}
        </div>
      </div>
    )
}