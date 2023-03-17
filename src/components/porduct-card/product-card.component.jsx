import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import './product-card.styles.scss'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const {addItemToCart} = useContext(CartContext)
    const addProductToCart = () => addItemToCart(product)
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
                <button className='button-container' onClick={addProductToCart}>Add to Card</button>
            </div>
        </div>
    )
}

export default ProductCard;