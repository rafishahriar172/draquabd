import { Fragment,useContext } from "react";
import { Outlet, Link } from "react-router-dom"

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdwon from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as DrAqua } from '../../assests/draqua.svg'
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss'
const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)


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
            <CartIcon />          
          </div>
          {isCartOpen && <CartDropdwon />}
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;