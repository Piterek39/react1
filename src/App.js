// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import { data } from './module-data';
import CarProfile from './CarProfile';

function App() {
    return (
        <div>
            <h1>Car Profiles</h1>
            {data.map(car => (
                <CarProfile key={car.id} {...car} />
            ))}
        </div>
    );
}

export default App;