import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Posts/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/Validators/validators";
import {Textarea} from "../../Common/FormControls/FormControls";

const MyPosts = React.memo((props) => {

    let postElements = [...props.posts]
        .reverse()
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)


    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={classes.content}>
            <div>
                <h2>My posts</h2>
            </div>
            <div>
                <AddPostFormRedux onSubmit={addNewPost}/>
            </div>
            <div className={classes.post}>
                {postElements}
            </div>
        </div>
    );
})

const maxLength10 = maxLengthCreator(30);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={classes.textField} component={Textarea} name="newPostText" placeholder="Please create a post"
                   validate={[required, maxLength10]}/>
            <div>
                <button className={classes.addPost}>Add Post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "ProfileAddPostForm"})(AddPostForm)

export default MyPosts;
