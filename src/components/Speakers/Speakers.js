import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Speaker from '../Speaker/Speaker';
import './Speakers.css';

const Speakers = () => {
    const [speakers, setSpeakers] =useState([]);
    const [cart, setCart] =useState([]);
    useEffect(()=>{
        fetch('./guest.JSON')
        .then(res => res.json())
        .then(data => setSpeakers(data))
    },[])
    const handleAdd =(speaker) =>{
        const newSpeaker= [...cart, speaker];
        setCart(newSpeaker)
    }
    return (
        <div className="speakers-container">
            <div className="container speaker-container">
            <div className="speaker-header">
                <h2>Speakers</h2>
            </div>
            <div className="row">
                <div className="col-lg-9">
                <div className="speakers">
                {
                    speakers.map(speaker => <Speaker
                    key={speaker.key}
                    speaker={speaker}
                    handleAdd={handleAdd}></Speaker>)
                }
                </div>
                </div>
                <div className="col-lg-3">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default Speakers;