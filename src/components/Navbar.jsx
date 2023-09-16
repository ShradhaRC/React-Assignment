import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import logo from "./images/logo.png"
import Button from 'react-bootstrap/Button';
import './Navbar.css';
import './Rsponsive.css';

function Navbar() {
  return (
    <>
    <Container className='dflex'>
        <Row>
            <Col xs={12} className='dflex navbar'>
                <Col xs={2} className='dflex aligncenter'>
                <img src={logo} alt="" className='logo' />
                </Col>
                <Col xs={8}>
                    <div className="content">
                    <h2>Fashion Factory 
                      
                    </h2>
                    <p>Best collections . Best choice</p>
                    <p>well come</p>
                    </div>
                </Col>    
                <Col xs={2} className='btn'>
                <Button variant="primary">Primary</Button>
                </Col>               
            </Col>
        </Row>
    </Container>

    </>
  )
}

export default Navbar