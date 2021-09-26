import React from 'react';
import Booking from '../Booking/Booking';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);
    let total = 0;

    for(const speaker of cart){
        total = total + speaker.fee;
    }
    
    return (
        <div className="booking-cart">
            <h4>Booking Details</h4>
            <br />
            <h5>Total Booking: {props.cart.length}</h5>
            <br />
            <h5>Total Fees: ${total}</h5>
            <br />
            <h4>Booked Speaker</h4>
            {
                cart.map(booking => <Booking
                key={booking.key}
                booking={booking}></Booking>)
            }
        </div>
    );
};

export default Cart;