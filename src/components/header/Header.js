import Cart from '../cart/Cart';
import './header.scss';

const Header = (props) => {
    console.log('render header');

    return (
        <header>
            <div className="container">
                <div className="header">
                    <h1>Каталог товаров</h1>
                    <Cart newCartSum = {props.newCartSum} newCartCount={props.newCartCount}/>
                </div>
            </div>
        </header>
    )
}

export default Header;