import './bookList.css';
import bookJson from '../../assets/books.json';
import BookItem from '../bookItem/BookItem';

type Book = {
  title : string,
  author : string,
  pages : number,
  genre :string,
  desc : string
}

type Props = {
  addToCart : () => void,
  removeFromCart : () => void
}

function BookList({ addToCart, removeFromCart } : Props) {
  const bookList : Book[] = [...bookJson];


  return (
    <section className="page-booklist">
      <div className="booklist content-wrapper">
        {
          bookList.map((book, index) => {
            return <BookItem key={ index } addToCart={ addToCart } removeFromCart={ removeFromCart } book={ book } />
          })
        }
      </div>
    </section>
  )
}

export default BookList
