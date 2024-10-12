import cartImage from '../../resources/img/grocery-cart.png';
import './cart.scss';

const Cart = () => {
    localStorage.setItem('totalQuantity', 8); 
    const totalQuantity = localStorage.getItem('totalQuantity');

    localStorage.setItem('totalSum', 8000); 
    const totalSum = localStorage.getItem('totalSum');
    
    // const imagineGoods = [{a: 12, price: 12}, {a: 4568, price: 13}];
    // localStorage.setItem('goods', JSON.stringify(goods));

    // localStorage.setItem('storedUsers', JSON.stringify(users));
    // ...
    // var users = [];
    // if (localStorage.getItem('storedUsers'))
    // users = JSON.parse(localStorage.getItem('storedUsers'));

    return (
        <div className="cart">
            <div className="container">
                <div className="cart-wrapper">
                    <div className="cart-quantity">
                        {totalQuantity}
                    </div>
                    <div className="cart-img">
                        <img src={cartImage} alt="shopping cart"/>
                    </div>
                    <div className="cart-sum">
                        {totalSum+1000} &#8381;
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;