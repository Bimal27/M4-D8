import { Navbar, Nav, Col, Row } from "react-bootstrap"
import React from 'react' 
import { BsSearch  } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import SearchBar from './SearchBar'

const Newnavbar = () => (

    
    <Row id="NewNav">
    
   <Col xs={2}>
      <Navbar.Brand  href="#home">
        <img
          src="https://epmgaa.media.clients.ellingtoncms.com/img/photos/2018/06/25/Netflix_Logo_t580.jpg?8f1b5874916776826eb17d7e67de7278c987ca33"
          width="140"
          height="60"
          id="logo"
          className="d-inline-block align-top"
          alt="Netflix"
        />
      </Navbar.Brand>
    </Col>
    <Col className="p-3 "    xs={6}>
    <Navbar.Brand id="MAGhome" href="#home">Home</Navbar.Brand>
      <Navbar.Brand id="MAGLink" href="#home">Link</Navbar.Brand>
      <Navbar.Brand id="MAGLink" href="#home">TV Shows</Navbar.Brand>
      <Navbar.Brand id="MAGLink" href="#home">Movies</Navbar.Brand>
      <Navbar.Brand id="MAGLink" href="#home">Recently Added</Navbar.Brand>
    </Col>
    <Col id="icoCol" xs={4}><Nav.Link  href="#deets"> 
    
    <SearchBar />

    </Nav.Link>
      <Nav.Link id="MAGhome" href="#deets">KIDS </Nav.Link>
      <Nav.Link id="MAGdicons" href="#deets"> <BsBell></BsBell></Nav.Link>
      <Nav.Link id="MAGdicons" href="#deets"> <BsFillPeopleFill></BsFillPeopleFill></Nav.Link>   
    </Col>
    
</Row>


)

export default Newnavbar