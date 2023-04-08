const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_MESSAGE = 'CHANGE-MESSAGE';

let initialState = {
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
};

export const dialogsReducer = (state =  initialState, action) => {
    switch(action.type){
        case SEND_MESSAGE:
            let text = state.newMessageText;
            return{
                ...state,
                newMessageText: '',
                messages: [...state.messages, {
                    id: 4, 
                    message: text
                }]
            }

        case CHANGE_MESSAGE:           
            return{
                ...state,
                newMessageText: action.newMessageText
            } 
        default:
            return state;    
    }
}