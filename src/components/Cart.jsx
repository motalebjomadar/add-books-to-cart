import './Cart.css'

const Cart = ({cart}) => {
    const {id, name, price, img, published_year} = cart;
    return (
        <div className='cart-style'>
            <img src={img}></img>
            <br></br>
            <button>Remove</button>
        </div>
    );
};

export default Cart;