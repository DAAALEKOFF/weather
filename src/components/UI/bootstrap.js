import React from 'react'
import {Navbar, Button, Form, FormControl, Nav, } from 'react-bootstrap'



function WeatherBar() {
  
    return (
    <Navbar bg="dark" variant="dark">
       <Navbar.Brand>Weather</Navbar.Brand>
         <Nav className="mr-auto">
           <Nav.Link href="/">mainPage</Nav.Link>
           {/* <Nav.Link href="DetInform">Detailed Information</Nav.Link> */}
         </Nav>
       <Form inline>
         <FormControl type="text" placeholder="Search" className="inputSearch, mr-2"
         />
         <Button variant="outline-info"
         >Search</Button>
       </Form>
    </Navbar>
    );
}

export default WeatherBar