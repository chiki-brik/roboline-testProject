import useGoodsService from '../../services/GoodsService';
import { useState, useEffect } from 'react';

import './goodsList.scss';

const GoodsList = () => {
    const [offset, setOffset] = useState(0);
    const [goods, setGoods] = useState([]);
    const [goodsEnded, setGoodsEnded] = useState(false);

    const {getAllGoods} = useGoodsService();

    useEffect(() => { // mounting
        getAllGoods(offset)
            .then(onGoodsLoaded)
            .catch((e) => console.log(e));
    }, []); 

    const addToCart = (goodsId) => {
        console.log(goodsId);
    }

    const onReload = () => {
        getAllGoods(offset)
            .then(onGoodsLoaded)
            .catch((e) => console.log(e));
    }

    const renderElements = () => {
        const items = goods.map((item) => {
            return (
                <li key={item.id} className='goods-item' >
                    <div className="goods-item__image">
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className="goods-item__title">
                        {item.name}
                    </div>
                    <div className="goods-item__price">
                        {item.price}
                    </div>
                    <button 
                        className='item-btn'
                        onClick={() => addToCart(item.id)}>
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
    }
    
    const elements = renderElements();

    return (
        <section className="goods-list">
            <div className="container">
                <div className="goods-list__wrapper">
                    <ul className="goods-items">
                            {elements}
                    </ul>
                    <button 
                        className='reload-btn'
                        style={{'display': goodsEnded ? 'none' : 'block'}}
                        onClick={onReload}> 
                        Показать еще 
                    </button>
                </div>
            </div>
        </section>
    )
}

export default GoodsList;