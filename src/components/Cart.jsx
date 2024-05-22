import PropTypes from 'prop-types';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    const {id, name, price, img, published_year} = cart;
    return (
        <div className='cart-style'>
            <img src={img}></img>
            <br></br>
            <button onClick={()=> handleRemoveFromCart(cart.id)}>Remove</button>
        </div>
    );
};
Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;