import React, { useEffect, useState } from "react";
import Data from './data.json';
import Button from '../Button/Button';
import './Navbar.scss';
import Modal from './Modal';

const Navbar = () => {
    const [btn, setBtn] = useState(false);

    useEffect(() => {
        let prevScrollpos = window.pageYOffset
        window.onscroll = function () {
            let currentScrollpos = window.pageYOffset
            setBtn(prevScrollpos < currentScrollpos)
            prevScrollpos = currentScrollpos
        }
    }, [])

    return (
        <>
            <div className='box-nav'>
                <nav className='navbar navbar-light   p-3'>
                    <img
                        style={{ width: '30px', height: '20px' }}
                        src={require('../../Assets/arrow.svg')}
                        alt=''
                    />
                    <div className='row'>
                        <p className='text-address'>ALAMAT PENGANTARAN</p>
                        <p
                            data-toggle="modal" data-target="#exampleModalLong"
                            className='text-place'
                        >
                            Tokepedia Tower{' '}
                            <img
                                style={{ width: '18px', height: '15px' }}
                                src={require('../../Assets/down-arrow.svg')}
                                alt=''
                            />
                        </p>
                    </div>
                </nav>
                <div className='collapse-day' id='collapseExample'>
                    <div className='card card-body collapse-card'>
                        <div className='row collapse-row'>
                            <div id='style-1' className='scrollmenu text-center'>
                                {Data.day.map(res => (
                                    <div key={res.id} className='box-text text-center'>
                                        <div className={`card ${res.disable === true ? "card-text2" : "card-text"}`}>
                                            <p className={res.disable === true ? "text-hari2" : "text-hari"}>{res.hari}</p>
                                            <br></br>
                                            <p className={res.disable === true ? "text-tgl2" : "text-tgl"}>{res.tgl}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {btn === false ? <Button /> : null}
            </div>
            <Modal />
        </>
    )
}

export default Navbar;
