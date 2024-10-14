import useGoodsService from '../../services/GoodsService';
import Error from '../error/Error';
import Spinner from '../spinner/Spinner';
import { useState, useEffect } from 'react';

import './goodsList.scss';

const GoodsList = (props) => {
    const [offset, setOffset] = useState(0);
    const [goods, setGoods] = useState([]);
    const [goodsEnded, setGoodsEnded] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const {getAllGoods} = useGoodsService();

    useEffect(() => { // mounting
        getAllGoods(offset)
            .then(onGoodsLoaded)
            .catch((e) => catchError(e));
    }, []); 

    const addToCart = (goodsId) => {
        props.addNewItemToCart(goods[goodsId]);
    }

    const catchError = (e) => {
        setError(true);
        console.log(`При получении данных возникла ошибка: ${e}`)
    }

    const onReload = () => {
        setLoading(true);
        getAllGoods(offset)
            .then(onGoodsLoaded)
            .catch((e) => catchError(e));
    }

    const renderElements = () => {
        const items = goods.map((item, i) => {
            return (
                <li key={item.id} className='goods-item' >
                    <div className="goods-item__image">
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className="goods-item__title">
                        {item.name}
                    </div>
                    <div className="goods-item__price">
                        {item.price} &#8381;
                    </div>
                    <button 
                        className='item-btn'
                        onClick={() => addToCart(i)}>
                        Добавить в корзину
                    </button>
                </li>
            )
        });

        return items;
    }

    const onGoodsLoaded = (newArray) => {
        if (newArray.length < 10) setGoodsEnded(true);
        setGoods(goodsArray => [...goodsArray, ...newArray]);
        setOffset(offset => offset + 10);
        setLoading(false);
    }
    
    const elements = renderElements();
    const errorComponent = error ? <Error/> : null;
    const spinnerComponent = loading && !error ? <Spinner/> : null;

    return (
        <section className="goods-list">
            <div className="container">
                <div className="goods-list__wrapper">
                    <ul className="goods-items">
                            {elements}
                    </ul>
                    {errorComponent}
                    {spinnerComponent}
                    <button 
                        className='reload-btn'
                        style={{'display': goodsEnded || error ? 'none' : 'block'}}
                        onClick={onReload}> 
                        Показать еще 
                    </button>
                </div>
            </div>
        </section>
    )
}

export default GoodsList;