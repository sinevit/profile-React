import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './Users.module.css'
import userPhoto from '../../assets/images/ava.png'

export const User = ({user, unfollow, follow, followingProgress }) => {

    return (
        <div>
            <span>
                <NavLink to={'/profile/*' + user.id}>
                    <img className={classes.userPhoto} src={user.photos.small ? user.photos.small : userPhoto} alt="avatar" />
                </NavLink>
                <div>
                    {user.followed ?
                        <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }}>Unfollow</button>
                        : <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Follow</button>}

                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    {/* <div>{u.location.country}</div>
                            <div>{u.location.city}</div> */}
                </span>
            </span>

        </div>

    )
}

