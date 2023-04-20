import React from 'react';
import { connect } from "react-redux";
import {getUserID, updateStatus, getStatus, savePhoto} from '../../redux/profile-reducer'
import { Profile } from "./Profile"
import {
    useLocation,
    useNavigate,
    useParams,

} from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

    refreshUserProfile(){
        let profileId = this.props.router.params.userId ?  this.props.router.params.userId.substring(1) : 28718;
        this.props.getUserID(profileId)
        this.props.getStatus(profileId)
    }

    componentDidMount(){
        this.refreshUserProfile()
    }

    componentDidUpdate(prevProps){
        if(this.props.router.params.userId !== prevProps.router.params.userId)
        this.refreshUserProfile()
    }

    render(){
        return <Profile {...this.props} profile={this.props.profile} 
        status={this.props.status} updateStatus={this.props.updateStatus}
        isOwner={this.props.router.params.userId}
        />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {getUserID, updateStatus, getStatus, savePhoto}),
    withRouter,
    withAuthRedirect)(ProfileContainer)
