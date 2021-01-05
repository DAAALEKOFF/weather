import React, {useState, useEffect} from 'react'
import { Card, Button, Form, } from 'react-bootstrap'

const API_KEY = "886705b4c1182eb1c69f28eb8c520e20"

  function MainPage() {
  const [city, setCity] = useState('');
  const saveCity = (event) => setCity(event.target.value);

  const [main, setMain] = useState('');
  const [name, setName] = useState('');

  // useEffect(() => {
  //   // localStorage.setItem()
  // })

  const getData = async () => {
    const wether = await wetherInf(city);
      console.log(wether)
        setMain(wether.main)
          setName(wether.name)
  }
  
  


  return (
  <Card style={{width: '18prem'}} className="card-body">
    <Card.Body>
        <Form >
          <Card.Text>
            <Form.Control placeholder="City" className="inputC"
            value={city} 
            onChange={saveCity}></Form.Control>
            <Button variant="outline-dark" 
              onClick={getData}
            >Submit</Button>
          </Card.Text> 
          <div>
            <h1>Wether in city: {name}</h1>
              <p>feels_like: {main.feels_like}</p>
              <p>humidity: {main.humidity}</p>
              <p>pressure: {main.pressure}</p>
              <p>temp: {main.temp}</p>
              <p>temp_max: {main.temp_max}</p>
              <p>temp_min: {main.temp_min}</p>

          </div>
        </Form>
        <Button>Refresh</Button>
    </Card.Body>
  </Card>
);
}

 const wetherInf = async (city) => {
  const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)

if (!data.ok) {
  console.error("Ошибка HTTP: " + data.status)
  return {} 
} 
  const json = await data.json();

return json
}



export default MainPage