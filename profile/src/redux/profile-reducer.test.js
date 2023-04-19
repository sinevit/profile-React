
import { profileReducer, addPosts, deletePost } from './profile-reducer'

let state = {
    posts: [
        {
            id: 1, like: 15, message: `Желтый лист плывет.
        У какого берега, цикада,
        Вдруг проснешься ты?`},
        {
            id: 2, like: 1, message: `Цветок… И еще цветок…
        Так распускается слива,
        Так прибывает тепло.`},
        { id: 3, like: 25, message: 'My first post' }
    ],
}

it('count the post', () => {
    let action = addPosts('take me kharizma');

    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4);
});

it('message a new post should be "take me kharizma"', () => {
    let action = addPosts('take me kharizma');

    let newState = profileReducer(state, action)
    expect(newState.posts[3].message).toBe('take me kharizma');
});

it('decrement posts length', () => {
    let action = deletePost();

    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3);
});

