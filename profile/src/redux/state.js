import { dialogsReducer } from "./dialogs-reducer copy";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer copy 2";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)
    
        this.rerenderEntireTree();
    }


}
window.store = store;


