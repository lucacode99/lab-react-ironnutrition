import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import React, {useState} from 'react'
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'
import foodsJSON from './foods.json'
import Search from './components/Search'


function App(props) {
  // add new food
  const [food, setFood] = useState(foodsJSON)
  const [searchFood,setSearchFood]  = useState("")
  const addNewFood = (newFood) => {
      const updatedFood = [...food, newFood];
      setFood(updatedFood);
  };

  return (
    <div className="App">

      {/* add food */}
      <Col>
      <Card>
        <AddFoodForm addNewFood={addNewFood}/>
      </Card>
    </Col>

      
    <Col>
      <Card>
        <Search searchFood={searchFood} onSearch={setSearchFood}/>
        
      </Card>
    </Col>
    {food
        .filter((elem, i) => {
          return elem.name.toLowerCase().includes(searchFood.toLowerCase())
        }).map((elem, i) => {
          
          return (
            
            <col>
            <Card
              title={elem.name}
              style={{ width: 230, height: 300, margin: 10}} 
            >
            <img src={elem.image} height={60} alt ="food" />
            <p>Calories: {elem.calories}</p>
            <p>Servings: {elem.servings}</p>
            <p>Total Calories: {elem.calories * elem.servings}</p>
            </Card>
            </col>
          )}
         
    )}  
        
    
        
    <FoodBox newFood={food} />

    </div>
    )}

export default App;
