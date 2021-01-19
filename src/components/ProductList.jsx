import React, {useState} from 'react';
import ItemMenu from './ItemMenu';
import './ProductList.scss'


const ProductList = () => {
    const [price, setPrice] = useState(0)
    const [item, setItem] = useState(0)
    return (
        <div>
            <div className='container text-left mb-5'>
                <p className='text-date'>Kamis, 14 Januari 2020</p>
                <ItemMenu increment={setItem} item={item} price={setPrice} />
            </div>
        </div>
    )
}

export default ProductList