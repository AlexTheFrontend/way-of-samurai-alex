const addPost = 'ADD-POST';
const updateNewPost = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, message: 'Hi how are you?', likesCount: 10},
    {id: 2, message: 'It is my 1st post', likesCount: 15},
    {id: 3, message: 'Haha how are you mate?', likesCount: 18},
    {id: 4, message: 'Sweet as!', likesCount: 46},
  ],
  newPostText: 'Placeholder Alex',
};

const profileReducer = (state = initialState, action) => {

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