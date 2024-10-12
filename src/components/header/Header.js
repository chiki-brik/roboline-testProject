import Cart from '../cart/Cart';
import './header.scss';

const Header = (props) => {
    console.log('render header');

    return (
        <header>
            <div className="container">
                <Cart newCartSum = {props.newCartSum} newCartCount={props.newCartCount}/>
                <h1>Каталог товаров</h1>
            </div>
        </header>
    )
}

export default Header;