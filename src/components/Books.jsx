import { useEffect, useState } from "react";
import Book from "./Book";
import './Books.css'
import Cart from "./Cart";
import { addToLS, getStoredCart, removeFromLS } from "./utilities";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([])
    

    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    // load cart from local storage
    useEffect(() => {
        if(books.length>0){
            const storedCart = getStoredCart();
            const savedCart = [];
            for(const id of storedCart){
                console.log(id);
                const book = books.find(book => book.id === id);
                if(book){
                    savedCart.push(book);
                }
            }
            console.log('saved cart', savedCart)
            setCart(savedCart)
        }
        
    }, [books])

    const handleAddToCart = (book) => {
        const newBook = [...cart, book];
        setCart(newBook);
        addToLS(book.id);
    }

    const handleRemoveFromCart = id => {
        // visual cart remove
        const remainingCart = cart.filter(book => book.id !== id);
        setCart(remainingCart);
        // remove from LS
        removeFromLS(id);
    }

    return (
        <div className='books-wrapper'>
            <h1>Cart {cart.length}</h1>
            <div className='cart-container'>
                {
                    cart.map(cart => <Cart handleRemoveFromCart={handleRemoveFromCart} key={cart.id} cart={cart}></Cart>)
                }
            </div>

            <h1>Books available {books.length}</h1>
            <div className='books-container'>
                {
                    books.map(book => <Book handleAddToCart={handleAddToCart} key={books.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;