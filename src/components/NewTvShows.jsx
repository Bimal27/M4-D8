import { Navbar, Nav, NavDropdown, variant,  Dropdown, DropdownButton, Col, Row } from "react-bootstrap"
import React from 'react' 
import { BsCardText  } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";


const NewTvShows = () => (
    <Row id="NewNav">
    
   <Col xs={3}>
      
   <Navbar id="MAG"  >
    
    <Navbar.Brand id="MAGhome" href="#home">
      
    
    </Navbar.Brand>
    <Navbar.Brand id="MAGTVSHOW" href="#home">TV Shows</Navbar.Brand>
    
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="me-auto">
  
    
    <NavDropdown   title="Genres" id="Genres">
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Romance</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Robot</NavDropdown.Item>
      
      
      
    </NavDropdown>
  </Nav>
  <Nav>
    <Nav.Link id="MAGdis" href="#deets">Disabled</Nav.Link>
    
    
    
  </Nav>
</Navbar.Collapse>
 
</Navbar>
    </Col>
<Col  xs={8}></Col>
    
    
    <Col id="icoCol" xs={1}>
      
      <Nav.Link id="MAGdicons" href="#deets"> <BsCardText></BsCardText></Nav.Link>
      <Nav.Link id="MAGdicons" href="#deets"> <BsGrid></BsGrid></Nav.Link>   
      </Col>
    
</Row>


    
)

export default NewTvShows