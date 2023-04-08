import React from 'react';
import { connect } from 'react-redux';
import { Dialogs } from './Dialogs';


let mapStateToProps =(state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps =(dispatch) => {
  return {
    sendMessage: () => dispatch({type:'SEND-MESSAGE'}),
    changeMessage: (message) => dispatch({type: 'CHANGE-MESSAGE', newMessageText: message}),
  }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);