import Cart from '../cart/Cart';
import './header.css';

type Props = {
  cartItems : number
}

function Header({ cartItems} : Props ) {
  return (
    <header className="page-header">
      <div className="header content-wrapper">
        <i className="page-logo fa-solid fa-book-open"></i>
        <Cart cartItems={ cartItems } />
      </div>
    </header>
  )
}

export default Header;
