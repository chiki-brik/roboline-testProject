import cartImage from '../../resources/img/grocery-cart.png';
import './cart.scss';

const Cart = (props) => {
    console.log('render cart');

    const totalCount = props.newCartCount;
    const totalSum = props.newCartSum;

    return (
        <div className="cart">
            <div className="container">
                <div className="cart-wrapper">
                    <div className="cart-count">
                        {totalCount}
                    </div>
                    <div className="cart-img">
                        <img src={cartImage} alt="shopping cart"/>
                    </div>
                    <div className="cart-sum">
                        {totalSum} &#8381;
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;