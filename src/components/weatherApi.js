import React, { useState, useEffect } from 'react'
// import { Card, Button, Form, } from 'react-bootstrap'
// import classes from './mainPage.module.scss'

const API_KEY = "886705b4c1182eb1c69f28eb8c520e20"

function WeatherApi() {
  const [city, setCity] = useState('');
  const saveCity = (event) => setCity(event.target.value);

  const [main, setMain] = useState([]);
  const [name, setName] = useState([]);


  useEffect(() => {
    const appMain = localStorage.getItem('main') || []
    setMain(JSON.parse(appMain))
  }, [])

  useEffect(() => {
    localStorage.setItem('main', JSON.stringify(main))
  }, [main])

  useEffect(() => {
    const appName = localStorage.getItem('name') || []
    setName(JSON.parse(appName))
  }, [])

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name))
  }, [name])

  const getData = async () => {
    const wether = await weatherInf(city);
    console.log(wether)
    setMain(wether.main)
    setName(wether.name)
  }

  // return (
  //   <Card style={{width: '18prem'}} className={classes.cardCity}>
  //     <Card.Body>
  //         <Form >
  //           <Card.Text>
  //             <Form.Control placeholder="City" className="inputC"
  //             value={city} 
  //             onChange={saveCity}
  //             >              
  //             </Form.Control>
  //             <Button variant="outline-dark" 
  //               onClick={getData}
  //             >Submit</Button>
  //           </Card.Text> 
  //           <div>
  //             <h1>Wether in city: {name}</h1>
  //               <p>feels_like: {main.feels_like}</p>
  //               <p>humidity: {main.humidity}</p>
  //               <p>pressure: {main.pressure}</p>
  //               <p>temp: {main.temp}</p>
  //               <p>temp_max: {main.temp_max}</p>
  //               <p>temp_min: {main.temp_min}</p>
  //           </div>
  //         </Form>
  //         <Button>Refresh</Button>
  //     </Card.Body>
  //   </Card>
  // )
}

const weatherInf = async (city) => {
  const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)

  if (!data.ok) {
    console.error("Ошибка HTTP: " + data.status)
    return {}
  }
  const json = await data.json();

  return json
}



export default WeatherApi