const useGoodsService = () => {

    const getAllGoods = async (offset = 0, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

        const _url = 'https://webapi.omoloko.ru/api/v1/products';

        try {
            const response = await fetch(`${_url}?offset=${offset}&limit=10`, {method, body, headers});
            if (!response.ok) { // статус ответа не в диапазоне 200-299
                throw new Error(`Could not fetch ${_url}, status" ${response.status}`);
            }

            const data = await response.json();
            
            return data.products.map(transformGoods);

        } catch(e) {
            throw e;
        }

    };

    const transformGoods = (item) => {
        return {
            id: item.id,
            image: item.image,
            price: item.cost,
            name: item.title
        }
    }

    return {getAllGoods};
}

export default useGoodsService;