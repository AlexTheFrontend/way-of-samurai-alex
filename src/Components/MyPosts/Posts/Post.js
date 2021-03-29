import React from 'react';
import classes from './Post.module.css';


const Post = (pizdec) => {
    return (
        <div>
            <div className={classes.item}>
                {pizdec.message}
                <div>
                    Likes: {pizdec.likesCount}
                </div>
            </div>
        </div>
    )
}

export default Post;
