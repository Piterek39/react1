import React from 'react';
import { data } from '../data/module-data';  // Import wygenerowanych danych
//import CarProfile from '../components/CarProfile';
const Lab1 = () => (
    // <div>
    //     <h1>Laboratorium 1</h1>
    //     {data.map(car => (
    //         <div>
    //                     <h1>Car Profiles</h1>
    //                      {data.map(car => (
    //                         <CarProfile key={car.id} {...car} />
    //                     ))}
    //                 </div>
    //     ))}
    // </div>
    <div>
        <h1>Laboratorium 1</h1>
        {data.map(car => (
            <div key={car.id}>
                <h2>{car.name}</h2>
                <p>Registration Number {car.regNumber}</p>
                <p>Year: {car.year}</p>
                <p>Color: {car.color}</p>
            </div>
        ))}
    </div>
);

export default Lab1;