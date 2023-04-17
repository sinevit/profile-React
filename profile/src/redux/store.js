import { combineReducers, legacy_createStore as createStore, applyMiddleware  } from "redux";
import thunk from 'redux-thunk'
import { profileReducer } from './profile-reducer'
import { dialogsReducer } from './dialogs-reducer'
import { sidebarReducer } from './sidebar-reducer'
import { usersReducer } from './users-reducer'
import { authReducer } from './auth-reducer'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})
export let store = createStore(reducers, applyMiddleware(thunk));
