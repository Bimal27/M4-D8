import React from 'react' 
import { Container, Navbar, Nav, NavDropdown  } from 'react-bootstrap'
import { BsCardText, BsGrid } from "react-icons/bs";

const TVShowsMg = ()=> (

<>
  
  <Navbar id="MAG" >
    <Container>
      <Navbar.Brand id="MAGTVSHOW" href="#home">
        {' '}
      TV Shows
      </Navbar.Brand>
      <Navbar.Brand id="MAGLink" href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    
      
      <NavDropdown title="Genres" id="Genres">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <div className="tst">
      <Nav.Link id="MAGdiconsList" href="#deets"> <BsCardText></BsCardText></Nav.Link>
      <Nav.Link id="MAGdiconsa" href="#deets"> <BsGrid></BsGrid></Nav.Link></div>
    </Nav>
    <Nav>
      
      
    </Nav>
  </Navbar.Collapse>
    </Container>
  </Navbar>
</>

)

export default TVShowsMg