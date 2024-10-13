import { useEffect, useState } from "react";
import Header from "../header/Header";
import GoodsList from "../goodsList/GoodsList";
import Footer from "../footer/Footer";

import './app.scss';


const App = () => {

    const [itemsInCart, setItemsInCart] = useState(0);
    const [sumInCart, setSumInCart] = useState(0);

    useEffect(() => { // mounting

        const goodsInCart = JSON.parse(localStorage.getItem('cartItems'));

        if (!goodsInCart) { // пустой localStorage
            localStorage.setItem('cartItems', JSON.stringify([]));
        } else {
            let sum = 0;
            let count = 0;

            for (let item of goodsInCart) {
                count++;
                sum += item.price;
            }

            setItemsInCart(count);
            setSumInCart(sum);
        }
    }, []);

    console.log('render app');

    const addNewItemToCart = (item) => {
        const goodsInCart = JSON.parse(localStorage.getItem('cartItems'));
        goodsInCart.push(item);
        localStorage.setItem('cartItems', JSON.stringify(goodsInCart));

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