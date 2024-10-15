import React from 'react';

const CarProfile = ({ id, name, regNumber, year, color }) => {
    return (
        <div>
            <h2>Car {id}</h2>
            <p>Brand: {name}</p>
            <p>Registration Number: {regNumber}</p>
            <p>Year: {year}</p>
            <p>Color: {color}</p>
        </div>
    );
};

export default CarProfile;