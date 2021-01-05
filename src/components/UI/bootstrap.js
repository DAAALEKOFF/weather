import React, {useState} from 'react'
import {Navbar, Button, Form, FormControl, Nav, } from 'react-bootstrap'
import {city, saveCity, getData} from '../mainPage'


function WeatherBar() {
  
    return (
    <Navbar bg="dark" variant="dark">
       <Navbar.Brand>Weather</Navbar.Brand>
         <Nav className="mr-auto">
           <Nav.Link href="/">mainPage</Nav.Link>
           {/* <Nav.Link href="DetInform">Detailed Information</Nav.Link> */}
         </Nav>
       <Form inline>
         <FormControl type="text" placeholder="Search" className="inputCity" 
        //  value={city} 
        //  onChange={saveCity}
         />
         <Button variant="outline-info"
         >Search</Button>
       </Form>
    </Navbar>
    );
}

export default WeatherBar