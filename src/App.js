import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import React from 'react'
import FoodBox from './components/FoodBox'

function App() {

  return (
    <div className="App">

      <Row>
        <Col>
          <Divider>Fancy Input</Divider>
          <Input value={''} onChange={() => {}} />
        </Col>

        <Col>
          <Card title={'Fancy Card'}>
            <Button onClick={() => {}}>Fancy Button</Button>
          </Card>
        </Col>
      </Row>
    <FoodBox />
    </div>
  );
}

export default App;
