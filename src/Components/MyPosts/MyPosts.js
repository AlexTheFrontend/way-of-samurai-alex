import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Posts/Post';


const MyPosts = () => {
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
                <Post message='Hi how are you?' like='10'/>
                <Post message='It is my 1st post' like='15'/>
            </div>

        </div>
    );
}

export default MyPosts;
