import React from 'react';
import {Header} from './Header';
import { connect } from 'react-redux';
import { getAuth } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {

  componentDidMount(){
    this.props.getAuth()
  }
  render(){
    return <Header {...this.props}/>
  }
}
const mapStatetoProps = (state)=> ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})
export default connect(mapStatetoProps,{getAuth})(HeaderContainer)