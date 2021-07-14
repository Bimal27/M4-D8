import { Container , Row , Col } from 'react-bootstrap'
import React from 'react'

const MyFooter = ()=>
  (
    <footer>
        <Container>
               <Col className="mb-3">
                <div className="footer-icon col-12 mb-2 text-muted">
                    <i className="fab fa-facebook-square fa-lg mr-3"></i>
                    <i className="fab fa-instagram-square fa-lg mr-3"></i>
                    <i className="fab fa-twitter fa-lg mr-3"></i>
                    <i className="fab fa-youtube fa-lg"></i>
                </div>
                </Col>
            <Row>
                
                <Col>
                <small>
                <ul className="footer-list text-muted">
                    <li>Audio and Subtitle</li>
                    <li>Media Center</li>
                    <li>Privacy</li>
                    <li>Contuct Us</li>
                </ul>
                </small>
                </Col>
                <Col>
                <small>
                <ul className="footer-list text-muted">
                    <li>Audio Description</li>
                    <li>investor Relations</li>
                    <li>Legal Notices</li>
                </ul>
                </small>
                </Col>
                <Col>
                <small>
                <ul className="footer-list text-muted">
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookies Preferences</li>
                </ul>
                </small>
                </Col>
                <Col>
                <small>
                <ul className="footer-list text-muted">
                    <li>Gift Cards</li>
                    <li>Terms of Use</li>
                    <li>Corporate information</li>
                </ul>
                </small>
                </Col>
                
            </Row>
            <button className="footer-button text-muted"><small>Service Code</small></button>
            <small><p className="text-muted">© 1997-2021 Netflix</p></small>
        </Container>
    </footer>    
    
)
export default MyFooter