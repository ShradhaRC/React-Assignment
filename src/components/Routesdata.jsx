import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Linechartdata.css'


function Routesdata() {
    const value1 = 2.3;
    const value2 = 1.5;
    const value3 = 1.1;
    const value4 = 0.33;
    const value5 = 6.9;
    const value6 = 4.6;
    const value7 = 1.1;
    const value8 = 5.1;
    const value9 = 5.9;

  return (
    <div className='blw-lnechrt'>
    <Container className='dflex boxshadow'>
        <Row className='lnechrt1'>
            <Col>
                <h4>Tables</h4>
                <h6>The standard Lorem Ipsum passage</h6>
            </Col>
        </Row>
        <Row className='lnechrt2'>
            <Col>
                <h6>Report</h6>
                 <span className='value'>{value1}k</span>
            </Col>
            <Col>
                <h6>Report</h6>
                <span className='value'>{value2}k</span>
            </Col>
            <Col>
                <h6>Report</h6>
                <span className='value'>{value3}L</span>
            </Col>
        </Row>
        
        <Row className='lnechrt3'>
            <Col>
                <h6>Report</h6>
                <span className='value'>{value4}k</span>
            </Col>
            <Col>
                <h6>Report</h6>
                <span className='value'>{value5}k</span>
            </Col>
            <Col>
                <h6>Report</h6>
                <span className='value'>{value6}L</span>
            </Col>
        </Row>
		
		<Row className='lnechrt4'>
            <Col>
                <h6>Report</h6>
                <span className='value'>{value7}L</span>
            </Col>
        </Row>
		<Row className='lnechrt5'>
            <Col>
                <h6>The standard Lorem Ipsum passage</h6>
            </Col>
        </Row>
		<Row className='lnechrt6'>
            <Col>
                <h6>Report</h6>
                <span className='value'>{value8}k</span>
            </Col>
			<Col>
                <h6>Report</h6>
                <span className='value'>{value9}k</span>
            </Col>
        </Row>
    </Container>
</div>
  )
}

export default Routesdata