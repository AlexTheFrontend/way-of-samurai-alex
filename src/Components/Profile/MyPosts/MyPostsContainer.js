import {addPostActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// State functions
const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

// Callback functions
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => dispatch(addPostActionCreator(newPostText))
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
