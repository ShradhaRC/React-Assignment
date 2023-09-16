import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './LeftSide.css'

function Rightside() {
  const onlineUsers = [
    { id: 1, name: 'John Doe', icon: <AccountCircleIcon /> },
    { id: 2, name: 'Jane Doe', icon: <AccountCircleIcon /> },
    { id: 3, name: 'Bob Smith', icon: <AccountCircleIcon /> },
    { id: 4, name: 'Jeen Bosco', icon: <AccountCircleIcon /> },

  ]; 
  return (
    <>
    <Container className='rgt-sde-sec'>
      <Row>
        <Col>
        <h2>General</h2>
        </Col>
      </Row>
      <Row>
        <Col>
        <button type="button" class="btn btn-primary" >Contact</button>
        </Col>
        <Col>
        <button type="button" class="btn btn-primary" >About us</button>
        </Col>
      </Row>
      <Row>
      <Col>
        <button type="button" class="btn btn-primary" >Career</button>
        </Col>
      </Row>
      <Row>
        <Col>
        <h2>Internal</h2>
        </Col>
      </Row>
      <Row>
        <Col>
        <button type="button" class="btn btn-primary" >Staff</button>
        </Col>
        <Col>
        <button type="button" class="btn btn-primary" >Product</button>
        </Col>
      </Row>
      <Row>
        <Col>
        <button type="button" class="btn btn-primary" >Service</button>
        </Col>
        <Col>
        <button type="button" class="btn btn-primary" >Solutions</button>
        </Col>
      </Row>
      <Row>
        <Col>
        <button type="button" class="btn btn-primary" >Industries</button>
        </Col>
       
      </Row>
      <Row>
        <Col>
        <button type="button" class="btn btn-primary" >Support</button>
        </Col>
        <Col>
        <button type="button" class="btn btn-primary" >Deals</button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Client</h2>
          <h6>Information</h6>
        </Col>
      </Row>
<Row className='usr-nme'>
  <Col>
  <div>
      
      <ul className='nme-lst'>
        {onlineUsers.map(user => (
          <li key={user.id}>
            <span>{user.icon}</span>
            <span>{user.name}</span>
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  </Col>
</Row>
    </Container>

     
    </>
  )
}

export default Rightside