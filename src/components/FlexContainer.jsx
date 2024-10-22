import React, { useReducer } from 'react';
import { Card } from 'react-bootstrap';
import { data } from '../data/module-data';
import AppReducer from '../data/AppReducer';

const FlexContainer = ({ element: Element}) => {
    const [items, dispatch] = useReducer(AppReducer, data);
  return (
    <div className="d-flex flex-wrap justify-content-start">
      {items.map((item) => (
        <Element key={item.id} {...item} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default FlexContainer;
