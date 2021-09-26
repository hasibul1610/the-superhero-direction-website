import React from 'react';
import './Booking.css';

const Booking = (props) => {
    // console.log(props);
    return (
        <div>
            <p className="booked-person">{props.booking.name}</p>
            
        </div>
    );
};

export default Booking;