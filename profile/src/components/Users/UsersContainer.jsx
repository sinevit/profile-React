import React from 'react';
import { Users } from './Users';
import { connect } from "react-redux";
import {follow,unfollow,setCurrentPage,
    toogleFollowingProgress, getUsers} from '../../redux/users-reducer'
import { Preloader } from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getAllUsers, getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getfollowingProgress } from '../../redux/user-selector';


class UsersContainer extends React.Component{

    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onClickPagination = (pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize} 
            currentPage={this.props.currentPage}
            onClickPagination={this.onClickPagination}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingProgress={this.props.followingProgress}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return{
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getfollowingProgress(state)
    }
}

export default compose(
    connect(mapStateToProps,{ 
    follow,unfollow,setCurrentPage,
    toogleFollowingProgress,getUsers}),
    withAuthRedirect
    )
    (UsersContainer)