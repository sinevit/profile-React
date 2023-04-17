import React from 'react';
import { User } from './User';
import { connect } from "react-redux";
import {follow,unfollow,setCurrentPage,
    toogleFollowingProgress, getUsers} from '../../redux/users-reducer'
import { Preloader } from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


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
            <User totalUsersCount={this.props.totalUsersCount}
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

export default compose(
    connect(mapStateToProps,{ 
    follow,unfollow,setCurrentPage,
    toogleFollowingProgress,getUsers}),
    withAuthRedirect
    )
    (UsersContainer)