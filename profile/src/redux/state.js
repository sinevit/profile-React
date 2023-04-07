import {renfersEntireTree} from '../render'
export let state = {
    dialogsPage:{
        data : [
        {id: 1, name: 'Kristina'},
        {id: 2, name: 'Jylya'},
        {id: 3, name: 'Marina'},
        {id: 4, name: 'Rustam'},
        {id: 5, name: 'Kirill'}
        ],
        text : [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'YO'},
        {id: 3, message: 'PRIVET'}
        ],
    },
    profilePage: {
        posts : [
            {id: 1, like:15, message: `Желтый лист плывет.
            У какого берега, цикада,
            Вдруг проснешься ты?`},
            {id: 2, like:1, message: `Цветок… И еще цветок…
            Так распускается слива,
            Так прибывает тепло.`},
            {id: 3, like:25, message: 'My first post'}
            ],
        newPostText: 'Hellooo))'
    },
    sideBar: [
        {
         id: 1,
         name:'Kristina'
        },
        {
         id: 1,
         "name": 'Rustam'
        },
        {
         id: 1,
         name:'Luba'
        }
    ]
        
}

export let addPost = (newPostText) => {
    const newPost = {
        id: 4, 
        like: 0, 
        message: newPostText
    };
    
    state.profilePage.posts.push(newPost);
    renfersEntireTree(state);
}

