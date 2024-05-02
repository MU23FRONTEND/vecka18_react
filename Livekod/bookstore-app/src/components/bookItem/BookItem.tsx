import './bookItem.css';

type Book = {
  title : string,
  author : string,
  pages : number,
  genre :string,
  desc : string
}


type Props = {
  book : Book,
  addToCart : () => void
}

function BookItem({ book, addToCart }  : Props) {
  return (
    <article className="book">
      <h2 className="book-title">{ book.title }</h2>
      <p className="book-author">{ book.author }</p>
      <p className="book-desc">{ book.desc }</p>
      <button onClick={ addToCart } className="add-book-btn">Add to cart</button>
    </article>
  )
}

export default BookItem;
