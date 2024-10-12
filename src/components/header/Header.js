import Cart from '../cart/Cart';
import './header.scss';

const Header = () => {
    return (
        <header>
            <div className="container">
                <Cart/>
                <h1>Каталог товаров</h1>
            </div>
        </header>
    )
}

export default Header;