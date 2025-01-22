import React, { useReducer } from 'react';
import { Card } from 'react-bootstrap';
import { data } from '../data/module-data';
import AppReducer from '../data/AppReducer';
import { useContext } from 'react';
import AppContext from '../data/AppContext';

const FlexContainer = ({ element: Element}) => {
  const context = useContext(AppContext);
  const dispatch = context.dispatch;
  const items = context.items;
    
  return (
    <div className="d-flex flex-wrap justify-content-start">
      {items.map((item) => (
        <Element key={item.id} {...item} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default FlexContainer;
