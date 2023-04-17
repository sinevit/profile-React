import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './Users.module.css'
import userPhoto from '../../assets/images/ava.png'

export const User = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount/ props.pageSize)
    let pages = [];
    for(let i=1; i<= pagesCount; i++){
        pages.push(i)
    }

    return(
            
        <div>
            <div>
                {pages.map(page => {
                    return <span key={page} onClick={(e)=> { props.onClickPagination(page)}} className={props.currentPage === page? classes.selectedPage : ''}>{page}</span>
                })}
            </div>
            {props.users.map(u => 
                <div key={u.id}>
                    <span>
                        <NavLink to={'/profile/*' + u.id}>
                            <img className={classes.userPhoto} src={u.photos.small? u.photos.small :  userPhoto} alt="avatar"/>
                        </NavLink>
                        <div>
                            {u.followed ? 
                            <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            :<button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
        
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            {/* <div>{u.location.country}</div>
                            <div>{u.location.city}</div> */}
                        </span>
                    </span>

                </div>
                )}
        </div>
    )
}

  