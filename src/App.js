import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import React, {useState} from 'react'
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'
import foodsJSON from './foods.json'

function App(props) {
  //new
  const [food, setFood] = useState(foodsJSON)
  const addNewFood = (newFood) => {
      const updatedFood = [...food, newFood];
      setFood(updatedFood);
    };

  return (
    <div className="App">

      <Row>
        <Col>
          <Divider>Fancy Input</Divider>
          <Input value={''} onChange={() => {}} />
        </Col>

        <Col>
          <Card title='Fancy Card'>
            <Button onClick={() => {}}>Fancy Button</Button>
          </Card>
        </Col>

      </Row>
      <Col>
      <Card>
        <AddFoodForm addNewFood={addNewFood}/>
        

      </Card>
    </Col>
    <FoodBox newFood ={food}/>
    
    </div>
  );
}

export default App;
