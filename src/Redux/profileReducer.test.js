import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

describe('Tests for my project', () => {
    const state = {
        posts: [
            {id: 1, message: 'Hi how are you?', likesCount: 10},
            {id: 2, message: 'It is my 1st post', likesCount: 15},
            {id: 3, message: 'Haha how are you mate?', likesCount: 18},
            {id: 4, message: 'Sweet as!', likesCount: 46},
        ]
    };

    test('Incrementing posts count', () => {
        // 1. Initial data
        const action = addPostActionCreator('Text for post test');

        // 2. calling action
        let newState = profileReducer(state, action);
        // 3. Checking result
        expect(newState.posts.length).toBe(5);
    })

    test('Checking message context', () => {
        // 1. Initial data
        const action = addPostActionCreator('Text for post test');

        // 2. calling action
        let newState = profileReducer(state, action);
        // 3. Checking result
        expect(newState.posts[4].message).toBe('Text for post test');
    })

    test('Deleting post, checking if array of posts is decremented', () => {
        // 1. Initial data
        const action = deletePost(2);

        // 2. calling action
        let newState = profileReducer(state, action);
        // 3. Checking result
        expect(newState.posts.length).toBe(3);
    })

    test('Can not delete a post with incorrect postId', () => {
        // 1. Initial data
        const action = deletePost(1000);

        // 2. calling action
        let newState = profileReducer(state, action);
        // 3. Checking result
        expect(newState.posts.length).toBe(4);
    })
})




