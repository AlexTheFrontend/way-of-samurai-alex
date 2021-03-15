import React from 'react';
import classes from './Post.module.css';


const Post = (pizdec) => {
    debugger;
    return (
        <div>
            <div className={classes.item}>
                {pizdec.message};
            <div>
                    Likes {pizdec.like}
            </div>
            </div>
        </div>
    )
}

export default Post;
