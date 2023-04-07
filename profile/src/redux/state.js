export let store = {
    _state: {
        dialogsPage:{
            dialogs : [
            {id: 1, name: 'Kristina'},
            {id: 2, name: 'Jylya'},
            {id: 3, name: 'Marina'},
            {id: 4, name: 'Rustam'},
            {id: 5, name: 'Kirill'}
            ],
            messages : [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'YO'},
            {id: 3, message: 'PRIVET'}
            ],
            newMessageText:''

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
            {id: 1, name:'Kristina'},
            {id: 2, name: 'Rustam'},
            {id: 3,name:'Luba'}
        ],
            
    },
    getState(){
        return this._state;
    },
    subscribe (observer) {
        this.rerenderEntireTree = observer;
    },
    rerenderEntireTree() {
        console.log('state change')
    },

    dispatch(action) {
        if(action.type === 'ADD-POST'){
            const newPost = {
                id: 4, 
                like: 0, 
                message: this._state.profilePage.newPostText
            };
            
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this.rerenderEntireTree();
        } else if(action.type === 'CHANGE-POST'){
            this._state.profilePage.newPostText = action.newPostText;
            this.rerenderEntireTree();
        }else if(action.type === 'SEND-MESSAGE'){
            const newMessage = {
                id: 4, 
                message: this._state.dialogsPage.newMessageText
            };
            
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this.rerenderEntireTree();
        } else if(action.type === 'CHANGE-MESSAGE'){
            this._state.dialogsPage.newMessageText = action.newMessageText;
            this.rerenderEntireTree();
        }
    }


}
window.store = store;


