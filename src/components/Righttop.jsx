import React from 'react'
import Button from 'react-bootstrap/Button';
import './Righttop.css'
import { Col, Row } from 'react-bootstrap';
import Feeadack from '@material-ui/icons/Feedback'
import View from '@material-ui/icons/ViewDay'


function Righttop() {
  return (
    <div className='righttop'>
    <Row className='righttoprw2'>
        <Col className='righttopcol1'>
			<h4>Catagories</h4>
        </Col>
        <Col className='righttopcol2'>
			<Row className='righttoprw1'>
				<Col md={6}>
					<Button className='button-top'>Lorem btn</Button>
				</Col>
				<Col md={6}>
					<Button className='button1'>View More</Button>
				</Col>
			</Row>
        </Col>
    </Row>
    <Row className='righttoprw3'>
        <Col className='righttopcol31'>
			<h6><View />ViewDay</h6>        
            <h2>Views of blog</h2> 
        </Col>
        <Col className='righttopcol32'>
			<h6><Feeadack />Feadcack</h6>
            <h2>Inaformation</h2>
        </Col>
        <Col className='righttopcol33'>
			<h6><Feeadack />Feadcack</h6>
            <h2>Inaformation</h2>
        </Col>
</Row>
    
</div>

  )
}

export default Righttop