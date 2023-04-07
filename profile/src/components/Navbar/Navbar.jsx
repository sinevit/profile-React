import { NavLink } from 'react-router-dom'
import { Friend } from './Friends/Friend'
import classes from './Navbar.module.css'

export const Navbar = (props) => {
    return(
      <div>
        <nav className={classes.nav}>
          <div className={`${classes.item} ${classes.active}`}>
            <NavLink to="/" className = { navData => navData.isActive ? classes.active : classes.item }>Profile</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/dialogs" className = { navData => navData.isActive ? classes.active : classes.item }>Dialogs</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/news" className = { navData => navData.isActive ? classes.active : classes.item }>News</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/music" className = { navData => navData.isActive ? classes.active : classes.item }>Music</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/settings" className = { navData => navData.isActive ? classes.active : classes.item }>Settings</NavLink>
          </div>
        </nav>
        <div className={classes.friendsBlock}>
          <h2>My Friends</h2>
          <div className={classes.friends}>
            {props.state.map(el => <Friend name={el.name} id={el.id} />)}
          </div>
        </div>

      </div>

    )
}