import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {

  let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
      <div className={classes.content}>
        <div>
          <h3>My posts</h3>
        </div>
        <div>
          {/*Hardcodded - <textarea ref={newPostElement} value="Placeholder"/> -*/}
          <textarea
              ref={newPostElement}
              onChange={onPostChange}
              value={props.newPostText}/>
          <div>
            <button onClick={onAddPost}>Add Post</button>
          </div>
        </div>
        <div className={classes.post}>
          {postElements}
        </div>
      </div>
  );
}

export default MyPosts;
