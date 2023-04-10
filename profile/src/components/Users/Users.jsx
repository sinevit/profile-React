import classes from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/ava.png'
import { NavLink } from 'react-router-dom';


export const Users = (props) => { 

    let getUsers = () =>{
        if(props.users.length === 0){ 

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
                response => {
                    props.setUser(response.data.items)}
            )
        }
    }

    return(
        <div>
            <button onClick={getUsers}>get Users</button>
            {props.users.map(u => 
                <div key={u.id}>
                    <span>
                        <NavLink to={'./../profile/' + u.id}>
                            <img className={classes.userPhoto} src={u.photos.small? u.photos.small :  userPhoto}/>
                        </NavLink>
                        <div>
                            {u.followed ? 
                            <button onClick={() => {props.unfollowUser(u.id)}}>Unfollow</button>:
                            <button onClick={() => {props.followUser(u.id)}}>Follow</button>}
        
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