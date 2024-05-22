import { useEffect, useState } from "react";
import Book from "./Book";
import './Books.css'
import Cart from "./Cart";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([])
    

    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    const handleAddToCart = (book) => {
        const newBook = [...cart, book];
        setCart(newBook);
        console.log(book)
    }

    return (
        
        <div className='books-wrapper'>
            <h1>Cart {cart.length}</h1>
            <div className='cart-container'>
                {
                    cart.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
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