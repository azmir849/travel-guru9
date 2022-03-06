import React from 'react';
import { useHistory } from 'react-router-dom';
import './BookingCard.css'

const BookingCard = () => {
    const history = useHistory();
    const handleBooking =() =>{
        history.push("/login");
    }
    return (
        <div className="BookingCard">
           <p>Origin</p>
           <input className="text-area" type="text" name="JourneyFrom" id="" placeholder="From"/>
           <p>Destination</p>
           <input className="text-area" type="text" name="JourneyTo" id="" placeholder="Destination"/>
           <pre class="tab">   From                  To</pre>
           <input className="dateForm" type="date" name="JourneyFrom" id=""/>
           <input className="dateForm" type="date" name="JourneyTo" id=""/><br/>
           <button onClick={handleBooking} className="booking-btn d-flex justify-content-center">Start Booking</button>
        </div>
    );
};

export default BookingCard;