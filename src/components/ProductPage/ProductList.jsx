import React, { useState } from 'react';
import ItemMenu from '../ItemMenu/ItemMenu';
import './ProductList.scss'
import Navbar from '../Navbar/Navbar';


const ProductList = () => {
    const [price, setPrice] = useState(0)
    const [items, setItems] = useState(0)
    return (
        <>
            <Navbar />
            <div className='container text-left mb-5 '>
                <p className='text-tgl pt-4'>Kamis, 13 Maret 2019</p>
                <ItemMenu increment={setItems} items={items} price={setPrice} />
            </div>
            {items > 0 ? (
                <div className='cart-box text-left'>
                    <div className='cart-box-text m-2'>
                        <p className='text-price'>
                            {' '}
                            {items} Items | Rp {price}{' '}
                            {items > 0 ? (
                                <button
                                    onClick={() => [setItems(items - 1), setPrice(price - 35000)]}
                                    className='btn-min'
                                >
                                    -
                                </button>
                            ) : null}
                        </p>
                        <p className='text-ongkos'>Termasuk ongkos kirim</p>
                        <img
                            className='icon-cart'
                            style={{ width: '30px', height: '30px' }}
                            src={require('../../Assets/supermarket.svg')}
                            alt=''
                        />
                        <img
                            className='icon-next'
                            style={{ width: '15px', height: '15px' }}
                            src={require('../../Assets/next.svg')}
                            alt=''
                        />
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default ProductList