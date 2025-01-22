//import React from 'react';
import { Card } from 'react-bootstrap';
import React, {useState}  from 'react';
import { data } from '../data/module-data';
import RatingBar from './RatingBar';
import AppReducer from '../data/AppReducer';
import FlexContainer from './FlexContainer';
import { useContext } from 'react';
import AppContext from '../data/AppContext';
//import { useReducer } from 'react';
const CarProfile = ({ data}) => {
    // const [rating, setRating] = useState(data.rating);
    // const handleRate = () => {
    //     setRating((prevRating) => (prevRating === 10 ? 0 : prevRating + 1));
    //   };
    const context = useContext(AppContext);
  const dispatch = context.dispatch;
    const handleRate = () => {
        console.log('Rate button clicked');
        dispatch({
            type: 'rate',
            id: data.id,
            rating: data.rating === 10 ? 0 : data.rating + 1 // zmiana wartości rating
        });
    };
      const handleEdit = () => {
        console.log('Edit button clicked');
        dispatch({
            type: 'edit',
            id: data.id,
            payload: { name: 'Edited Car' } // przykładowa zmiana nazwy
        });
    };

    const handleDelete = () => {
        console.log('Delete button clicked');
        dispatch({
            type: 'delete',
            id: data.id
        });
    };
    return (
        
        <Card>
            <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <h2>Car {data.id}</h2>
            <p>Brand: {data.name}</p>
            <p>Registration Number: {data.regNumber}</p>
            <p>Year: {data.year}</p>
            <p>Color: {data.color}</p>
            <RatingBar rate={data.rating} />
            <button onClick={handleRate}>Rate</button>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      
        </Card.Body>
        </Card>
    );
};

export default CarProfile;