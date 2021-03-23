import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Posts/Post';


const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi how are you?', likesCount: 10},
        {id: 2, message: 'It is my 1st post', likesCount: 15},
    ]

    return (
        <div className={classes.content}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={classes.post}>
                <Post message={postsData[0].message} like={postsData[0].likesCount}/>
                <Post message={postsData[1].message} like={postsData[1].likesCount}/>
            </div>

        </div>
    );
}

export default MyPosts;
