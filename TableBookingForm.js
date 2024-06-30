// Import necessary dependencies
import React, { useState } from 'react';
import './TableBookingForm.css'; // Import CSS for styling (create this file)

// Define your functional component
const TableBookingForm = () => {
  // State variables to hold form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [partySize, setPartySize] = useState(1);
  const [bookingDate, setBookingDate] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add logic to handle form submission (e.g., send data to backend)
    console.log('Form submitted:', { name, email, phone, partySize, bookingDate });
    // Reset form fields after submission
    setName('');
    setEmail('');
    setPhone('');
    setPartySize(1);
    setBookingDate('');
  };

  // JSX for the form
  return (
    <div className="table-booking-form-container">
      <h2>Book a Table at Little Lemon Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Phone Number:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <label>Party Size:</label>
        <input
          type="number"
          min="1"
          value={partySize}
          onChange={(e) => setPartySize(parseInt(e.target.value))}
          required
        />
        <label>Preferred Booking Date:</label>
        <input
          type="date"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
          required
        />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};



// TableBooking.js

import React from 'react';
import './TableBooking.css';

const TableBooking = () => {
  return (
    <div className="table-booking-container">
      <form className="booking-form">
        {/* Form inputs and elements */}
      </form>
    </div>
  );
}

export default TableBooking;

