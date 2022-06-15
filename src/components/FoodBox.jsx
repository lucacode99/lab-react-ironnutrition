
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foodsJSON from '../foods.json'
import React, {useState} from 'react'

function FoodBox(props) {
    const [food, setFood] = useState(foodsJSON)
  return (
    <Col>
    {food.map((element, index) =>{
      return (
    
    <Card
      title={element.name}
      style={{ width: 230, height: 300, margin: 10 }} key={index}
    > 
      <img src={element.image} height={60} alt="food" />
      <p>{element.calories}</p>
      <p>Servings: {element.servings}</p>
      <p>
        <b>Total Calories: {element.calories * element.servings} </b> kcal
      </p>
      
      <Button type="primary"> Delete </Button>
    </Card>)
  })}
  </Col>
  )
}

export default FoodBox