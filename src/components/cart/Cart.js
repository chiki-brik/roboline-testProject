import cartImage from '../../resources/img/grocery-cart.png';
import './cart.scss';

const Cart = (props) => {
    console.log('render cart');

    const totalCount = props.newCartCount;
    const totalSum = props.newCartSum;

    return (
        <div className="cart">
            <div className="cart-wrapper">
                <div id='count' className="cart-count">
                    {totalCount}
                </div>
                <div id='img' className="cart-img">
                    <img src={cartImage} alt="shopping cart"/>
                </div>
                <div id='sum' className="cart-sum">
                    {totalSum} &#8381;
                </div>
            </div>
        </div>
    )
}

export default Cart;