import React from 'react'
import { Button, Form, Card } from 'react-bootstrap'
import classes from './mainPage.module.scss'
import city from './weatherApi';
import saveCity from './weatherApi'


function MainPage() {

  return (
    <Card style={{ width: '18prem' }} className={classes.cardCity}>
      <Card.Body>
        <Form >
          <Card.Text>
            <Form.Control placeholder="City" className="inputC"
              value={city}
              onChange={saveCity}
            >
            </Form.Control>
            <Button variant="outline-dark"
            //   onClick={getData}
            >Submit</Button>
          </Card.Text>
          {/* <div>
              <h1>Wether in city: {name}</h1>
                <p>feels_like: {main.feels_like}</p>
                <p>humidity: {main.humidity}</p>
                <p>pressure: {main.pressure}</p>
                <p>temp: {main.temp}</p>
                <p>temp_max: {main.temp_max}</p>
                <p>temp_min: {main.temp_min}</p>
            </div> */}
        </Form>
        <Button>Refresh</Button>
      </Card.Body>
    </Card>
  )
}




export default MainPage