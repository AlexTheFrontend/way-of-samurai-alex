// Creating an object with massive of data

let rerenderEntireTree = () => {
    console.log('State has been changed - Sasha')
};

let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi how are you?', likesCount: 10},
            {id: 2, message: 'It is my 1st post', likesCount: 15},
            {id: 3, message: 'Haha how are you mate?', likesCount: 18},
            {id: 4, message: 'Sweet as!', likesCount: 46},
        ],
        newPostText: 'Placeholder Alex',
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Sergey'},
            {id: 2, name: 'Dennis'},
            {id: 3, name: 'Roman'},
            {id: 4, name: 'Nadya'},
            {id: 5, name: 'Dima'},
            {id: 6, name: 'Julia'},
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Sup!'},
            {id: 3, message: 'Bruuuuuuuu'},
            {id: 4, message: 'I like this social network!'},
            {id: 5, message: 'Haha me too!'},
            {id: 6, message: 'Who made it?'},
            {id: 7, message: 'Some Russian developer, I think'},
            {id: 8, message: 'I want to hire him now!'},
        ],
    },
    sitebar: {},
}

// to display - state - in console and see what is currently logged in
window.state = state;

export const addPost = () => {

    let newPost = {
        id: 10,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    // to clear textarea after clicking a button
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
    // this is a pattern for observer
}

export default state;