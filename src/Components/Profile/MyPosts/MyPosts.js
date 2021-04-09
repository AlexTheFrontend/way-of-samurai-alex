import React, {useState} from 'react';
import classes from './MyPosts.module.css';
import Post from './Posts/Post';
import styles from "../../Dialogs/Dialogs.module.css";
// import {addPost} from "../../../Redux/State";


const MyPosts = (props) => {

  // let posts = [
  //     {id: 1, message: 'Hi how are you?', likesCount: 10},
  //     {id: 2, message: 'It is my 1st post', likesCount: 15},
  //     {id: 2, message: 'Haha how are you mate?', likesCount: 18},
  //     {id: 2, message: 'Sweet as!', likesCount: 46},
  // ]

  let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  // const [post, setPost] = useState({});

  let newPostElement = React.createRef();

  let addPost = () => {

    // props.addPost();
    props.dispatch({ type: 'ADD-POST' });
  }

  let onPostChange = () => {
    // addNewPost={props.addNewPost}
    let text = newPostElement.current.value;
    // props.addNewPost(text);
    // same as addPost above
    let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(action);
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
            <button onClick={addPost}>Add Post</button>
          </div>
        </div>
        <div className={classes.post}>
          {postElements}
        </div>

      </div>
  );
}

export default MyPosts;
