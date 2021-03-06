import React, { useState } from 'react'
import './modal.scss';
import Data from './data.json';

const Modal = () => {
    const [search, setSearch] = useState('');

    return (
        <>
            <div
                className='modal fade'
                id='exampleModalLong'
                tabIndex={-1}
                role='dialog'
                aria-labelledby='exampleModalLongTitle'
                aria-hidden='true'
            >
                <div className='modal-dialog' role='document'>
                    <div className={`modal-content ${search.length > 2 ? null : "modal-content2"}`}>
                        <div className='modal-header text-left'>
                            <h5 className='modal-title' id='exampleModalLongTitle'>
                                Cek makanan yang tersedia di lokasi mu!
              </h5>
                            <button
                                type='button'
                                className='close'
                                data-dismiss='modal'
                                aria-label='Close'
                            >
                                <span aria-hidden='true'>×</span>
                            </button>
                        </div>
                        <div className='modal-body text-left'>
                            <div className='input-group mb-3'>
                                <div className='input-group-prepend'>
                                    <span className='input-group-text' id='basic-addon1'>
                                        <img
                                            style={{ width: '20px', height: '20px' }}
                                            src={require('../../Assets/placeholder.svg')}
                                            alt=''
                                        />
                                    </span>
                                </div>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Search'
                                    aria-label='Search'
                                    aria-describedby='basic-addon1'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>

                            {search.length > 2 ? <ul className='list-group'>
                                {Data.location.map(res => (
                                    <li key={res.id} className='list-group-item'>
                                        <img
                                            style={{ width: '20px', height: '20px' }}
                                            src={require('../../Assets/pin.svg')}
                                            alt=''
                                        />{' '}
                                        {res.title}
                                        <p>{res.alamat}</p>
                                    </li>
                                ))}
                            </ul> : <p style={{ textAlign: 'center', color: '#424749' }} > cari lokasi</p>}

                        </div>
                        <div className='modal-footer'></div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Modal;