import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/module-data';

const Lab2 = () => {
    const { id } = useParams();
   
    if (!id) return <p>Brak identyfikatora auta.</p>;
    const car = data.find(c => c.id === Number(id));

    
    if (!car) return <p>Nie znaleziono auta o tym id.</p>;

    return (
        <div>         
            <h2>{car.name}</h2>
                <p>Registration Number {car.regNumber}</p>
                <p>Year: {car.year}</p>
                <p>Color: {car.color}</p>
        </div>
    );
};

export default Lab2;