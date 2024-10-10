import Cart from '../cart/Cart';
import './header.scss';

const Header = () => {
    return (
        <header>
            <div className="container">
                
                <h1>Каталог товаров</h1>
                <Cart/>
            </div>
        </header>
    )
}

export default Header;