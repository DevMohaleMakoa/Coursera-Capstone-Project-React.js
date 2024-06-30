import React from 'react';
import './App.css';
import TableBookingForm from './TableBookingForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Little Lemon Restaurant</h1>
      </header>
      <main>
        <TableBookingForm />
      </main>
      <footer>
        <p>&copy; 2024 Little Lemon Restaurant. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
