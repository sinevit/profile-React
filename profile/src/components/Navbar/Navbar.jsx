import { NavLink } from 'react-router-dom'
import { Friend } from './Friends/Friend'
import classes from './Navbar.module.css'

export const Navbar = () => {
    return(
      <div>
        <nav className={classes.nav}>
          <div className={`${classes.item} ${classes.active}`}>
            <NavLink to="/profile" className = { navData => navData.isActive ? classes.active : classes.item }>Profile</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/dialogs" className = { navData => navData.isActive ? classes.active : classes.item }>Dialogs</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/users" className = { navData => navData.isActive ? classes.active : classes.item }>Users</NavLink>
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
          {/* <StoreContext.Consumer>
            {(store) => {

              let state = store.getState().sideBar;
              return(
                <div className={classes.friends}>
                {state.map(el => <Friend name={el.name} key={ el.id} />)}
              </div>
              )
            }}

          </StoreContext.Consumer> */}
          {/* <div className={classes.friends}>
            {props.state.map(el => <Friend name={el.name} key={ el.id} />)}
          </div> */}
        </div>

      </div>

    )
}