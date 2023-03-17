import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/cart.context';

import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdwon = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <button className='btn btn-dark' id="button" onClick={goToCheckoutHandler}>Go to CheckOut</button>
        </div>
    )
}

export default CartDropdwon