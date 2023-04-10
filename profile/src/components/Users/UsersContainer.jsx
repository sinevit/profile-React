import React from 'react';
import axios from 'axios';
import { User } from './User';
import { connect } from "react-redux";
import {followUser,unfollowUser,setUser,setCurrentPage,
    setTotalUsersCount,toogleIsFetching} from '../../redux/users-reducer'
import { Preloader } from '../common/Preloader/Preloader';


class UsersContainer extends React.Component{

    componentDidMount(){
        this.props.toogleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
            response => {
                this.props.toogleIsFetching(false);
                this.props.setUser(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            }
        )
    }
    onClickPagination = (pageNumber)=>{
        this.props.toogleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(
            response => {
                this.props.toogleIsFetching(false);
                this.props.setUser(response.data.items)
            }
        )
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <User totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize} 
            currentPage={this.props.currentPage}
            onClickPagination={this.onClickPagination}
            users={this.props.users}
            unfollowUser={this.props.unfollowUser}
            followUser={this.props.followUser}
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
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps,{ followUser,unfollowUser,setUser,setCurrentPage,
    setTotalUsersCount,toogleIsFetching
})(UsersContainer)