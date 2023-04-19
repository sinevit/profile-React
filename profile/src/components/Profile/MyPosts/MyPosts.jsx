import React from 'react';
import classes from './MyPosts.module.css'
import { Post } from './Post/Post'
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/Preloader/FormsControls/FormControls';
import { maxLengthCreator, required } from '../../../utils/validate';

export const MyPosts = (props) => {
    const addPost = (values) => {
        props.addPosts(values.post);
    }

    return(
      <div className={classes.postsBlock}>
        <h1>my posts </h1>
        <PostsReduxForm onSubmit={addPost}/>
        <div>
          {[...props.posts].reverse().map( post => <Post like={post.like} message={post.message} key={post.id}/>)}
        </div>
      </div>
    )
}
const maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea}  
                    name={'post'}
                    validate={[required, maxLength10]}/>
        </div>
        <div>
           <button>Add post</button>
        </div>
    </form>
  )
}

const PostsReduxForm = reduxForm({
    form: 'posts'
})(PostForm)