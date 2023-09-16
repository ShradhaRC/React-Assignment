import React from 'react'
import LeftSide from './LeftSide'
import './Dashboard.css'
import Navbar from './Navbar'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Rightside from './Rightside'

function Dashboard() {
  return (
    <>
    <Navbar/>
      <Container className='dflex'>
        <Row>
          <div style={{width:'75%'}}>
          <LeftSide />
          </div>
          <div style={{width:'25%'}}>
          <Rightside />
          </div>

        </Row>
    
  </Container>
   </>
   
    
  )
}

export default Dashboard