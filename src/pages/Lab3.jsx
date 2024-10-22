import React from 'react';
import FlexContainer from '../components/FlexContainer';
import { Card } from 'react-bootstrap';
import { data } from '../data/module-data';
const Item = ({ name, id, className }) => (
    <Card style={{ width: '18rem' }} className="border mb-3 p-3 ms-3">
      {name}
    </Card>
  );

const Lab3 = () => {
    


    return (
        <div>
          <h1>Laboratorium 3</h1>
          <FlexContainer element={Item} data={data} />
        </div>
      );
  };
  export default Lab3;