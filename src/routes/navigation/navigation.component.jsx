import { Fragment,useContext } from "react";
import { Outlet, Link } from "react-router-dom"

import { ReactComponent as DrAqua } from '../../assests/draqua.svg'
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss'
const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    


    return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <DrAqua className="logo" />
            </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop' style={{color:"black"}}>
                SHOP
            </Link>
            {
              currentUser ? (
                <span className="nav-link" onClick={signOutUser} style={{color:"black"}}>SIGN OUT</span>
              ) : (
                <Link className="nav-link" to='/auth' style={{color:"black"}}>
                  SIGN IN
                </Link>
              )
            }            
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;