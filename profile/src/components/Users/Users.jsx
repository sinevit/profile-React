import React from 'react';
import { Pagination } from '../common/Paginator/Paginations';
import { User } from './User';

export const Users = ({ totalUsersCount, pageSize, currentPage, onClickPagination, ...props }) => {

    return (

        <div>
            <Pagination totalUsersCount={totalUsersCount} pageSize={pageSize} 
            currentPage={currentPage} onClickPagination={onClickPagination} 
            />
            {props.users.map(u => <User key={u.id}
                                    user={u}
                                    followingProgress={props.followingProgress}
                                    unfollow={props.unfollow}
                                    follow={props.follow} />
            )}
        </div>
    )
}

