import React, { useEffect } from 'react';
import data from './data.json';
import './ItemMenu.scss';

const ItemMenu = ({ price, items, increment }) => {
    useEffect(() => {
        price(items === 0 ? 35000 : 35000 * items)
    }, [items])

    return (
        <div className='row row-card-menu d-flex justify-content-center'>
            {data.menu.map(items => (
                <div key={items.id} className='col-sm'>
                    <div style={{ width: '350px' }} className='card mt-4 card-menu'>
                        <img
                            style={{ width: '350px', height: '300px' }}
                            className='card-img-top'
                            src={items.img}
                            alt=''
                        />
                        <div className='card-body'>
                            <h5 className='card-title'>
                                4.5
                            </h5>
                            <p className='card-text'>Roasted Chicken with Scrambled Egg</p>
                            <p className='text'>by Kulina · Uptown Lunch</p>
                            <div className='box-add'>
                                <p className='text'>Rp 35,000</p>
                                <button
                                    onClick={() => [
                                        increment(items + 1),
                                    ]}
                                    className='btn btn-add float-right'
                                >
                                    ADD +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemMenu;