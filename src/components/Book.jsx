import './Book.css'

const Book = ({book, handleAddToCart}) => {
    const {id, name, price, img, published_year} = book;
    return (
        <div className='book-style'>
            <img src={img}></img>
            <br></br>
            <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
        </div>
    );
};

export default Book;