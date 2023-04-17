import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

export const Header = (props) => {
    debugger
    return(
        <header className={classes.header}>
        <img src='https://png.pngtree.com/png-clipart/20190322/ourlarge/pngtree-japanese-cherry-blossom-fresh-style-and-fan-png-image_862466.jpg' alt='logo'></img>
        <div className={classes.loginBlock}>
            {props.isAuth 
            ? <div>{props.login} <button onClick={props.logout}>Logout</button></div> 
            : <NavLink to={"/login"}>'Login'</NavLink>}
        </div>
      </header>
    )
}