import './App.css';
import BookList from './components/bookList/BookList';
import Header from './components/header/Header';

function App() {
  let cartItems : number = 0;

  const addToCart = () => {
    cartItems++;
    console.log(cartItems);
  }


  return (
    <div className="app">
      <Header cartItems={ cartItems } />
      <BookList addToCart={ addToCart } />
    </div>
  )
}

export default App
