const addPost = 'ADD-POST';
const updateNewPost = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

  // debugger;
  switch (action.type) {
    case addPost:
      let newPost = {
        id: 10,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      // to clear textarea after clicking a button
      state.newPostText = "";
      return state;
    case updateNewPost:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: addPost})
export const updateNewPostTextActionCreator = (text) => ({type: updateNewPost, newText: text});

export default profileReducer;