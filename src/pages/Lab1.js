import React, { useReducer } from 'react';
import { data } from '../data/module-data';  // Import wygenerowanych danych
import CarProfile from '../components/CarProfile';
import RatingBar from '../components/RatingBar';
import AppReducer from '../data/AppReducer';
import FlexContainer from '../components/FlexContainer';
import { useContext } from 'react';
import AppContext from '../data/AppContext';
const Lab1 = () => {
 
    // <div>
    //     <h1>Laboratorium 1</h1>
    //     {data.map(car => (
    //         <div key={car.id}>
                
    //             <h2>{car.name}</h2>
    //             <p>Registration Number {car.regNumber}</p>
    //             <p>Year: {car.year}</p>
    //             <p>Color: {car.color}</p>
    //             <RatingBar rate={car.rating} />
    //             <button onClick={car.handleRate}>Rate</button>
    //         </div>
    //     ))}
    // </div>
    // const handleEdit = (id) => {
    //     console.log(`Edit car with id: ${id}`);
    //   };
    
    //   const handleDelete = (id) => {
    //     console.log(`Delete car with id: ${id}`);
    //   };
     //const [cars, dispatch] = useReducer(AppReducer, data);
     const context = useContext(AppContext);
     const dispatch = context.dispatch;
     const cars = context.items;
    // const handleEdit = (id) => {
    //     dispatch({ type: 'edit', id });
    // };

    // const handleDelete = (id) => {
    //     dispatch({ type: 'delete', id });
    // };

    // const handleRate = (id, rating) => {
    //     dispatch({ type: 'rate', id, rating });
    // };
    // return (
    //     <div>
    //       <h1>Laboratorium 1 - Profile Samochodów</h1>
    //       <div className="d-flex flex-wrap justify-content-start">
    //         {data.map((car) => (
    //           <CarProfile 
    //             key={car.id} 
    //             data={car} 
    //             //onEdit={() => handleEdit(car.id)} 
    //             //onDelete={() => handleDelete(car.id)} 
    //             onEdit={() => handleEdit(car.id)}
    //                     onDelete={() => handleDelete(car.id)}
    //                     onRate={() => handleRate(car.id, car.rating)}
    //                     dispatch={dispatch}
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   );
    return (
      <div>
          <h1>Laboratorium 1</h1>
          <FlexContainer
              data={cars}
              element={(car) => (
                  <CarProfile
                      key={car.id}
                      data={car}
                      dispatch={dispatch}
                  />
              )}
          />
      </div>
  );
    };

export default Lab1;