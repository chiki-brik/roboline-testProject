import Header from "../header/Header";
import GoodsList from "../goodsList/GoodsList";
import './app.scss';
import Footer from "../footer/Footer";
import { useState } from "react";

const App = () => {
    const [itemsInCart, setItemsInCart] = useState(0);
    const [sumInCart, setSumInCart] = useState(0);

    console.log('render app');

    const addNewItemToCart = (item) => {
        if (!itemsInCart) {
            localStorage.setItem('cartItems', JSON.stringify([item]));
        } else {
            const goodsInCart = JSON.parse(localStorage.getItem('cartItems'));
            goodsInCart.push(item);
            localStorage.setItem('cartItems', JSON.stringify(goodsInCart));
        }

        setItemsInCart(itemsInCart => itemsInCart + 1);
        setSumInCart(sumInCart => sumInCart + item.price);
    }

    return (
        <>
            <Header newCartSum={sumInCart} newCartCount={itemsInCart}/>
            <GoodsList addNewItemToCart = {addNewItemToCart}/>
            <Footer/>
        </>
    )
}

export default App;