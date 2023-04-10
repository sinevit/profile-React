import React from 'react';
import {Header} from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserData } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {

  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
    {withCredentials: true})
    .then(response => {
          if(response.data.resultCode === 0){
            this.props.setUserData(response.data.data)
          }

        }
    )
}

  render(){
    return <Header {...this.props}/>
  }
}
const mapStatetoProps = (state)=> ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})
export default connect(mapStatetoProps,{setUserData})(HeaderContainer)