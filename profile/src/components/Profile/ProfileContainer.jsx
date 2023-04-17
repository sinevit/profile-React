import React from 'react';
import { connect } from "react-redux";
import {getUserID, updateStatus, getStatus} from '../../redux/profile-reducer'
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

    componentDidMount(){
        let profileId = this.props.router.params.userId ?  this.props.router.params.userId.substring(1) : 2;
        this.props.getUserID(profileId)
        this.props.getStatus(profileId)
    }

    render(){
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {getUserID, updateStatus, getStatus}),
    withRouter,
    withAuthRedirect)(ProfileContainer)
