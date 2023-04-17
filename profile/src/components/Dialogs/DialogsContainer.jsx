import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { Dialogs } from './Dialogs';


let mapStateToProps =(state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
let mapDispatchToProps =(dispatch) => {
  return {
    sendMessage: () => dispatch({type:'SEND-MESSAGE'}),
    changeMessage: (message) => dispatch({type: 'CHANGE-MESSAGE', newMessageText: message}),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect)
  (Dialogs)