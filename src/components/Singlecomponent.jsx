import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GroupIcon from '@material-ui/icons/Group';
import './LeftSide.css'

function Singlecomponent() {
	const value1 = useState(100);
	const value2 = useState(100);
	const value3 = useState(100);
  return (
    <div>
    <Container>
        <Row className='prgss-bar'>
            <Col md={12} className='dflex boxshadow'>
            <h4>Progess Bar</h4>   
				<Row className='prgss-blck'>
					<Col>
						<div className=''>
							<span>Quality</span> <br></br>
							<span>{value1}%</span>
						</div>
					</Col>
					<Col>
						<div className=''>
							<span>Quantity</span> <br></br>
							<span>{value2}%</span>
						</div>
					</Col>
					<Col>
						<div className=''>
							<span>Customer care</span>  
							<br></br>
							<span>{value3}%</span>
						</div>
					</Col>
				</Row>
            </Col>
        </Row>
    </Container>
</div>
  )
}

export default Singlecomponent