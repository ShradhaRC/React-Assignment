import React from 'react'
import Paper from '@material-ui/core/Paper';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import './Linechartdata.css'


function Linechartdata() {
    const data = [
        { x: 1, y: 3 },
        { x: 2.5, y: 5 },
        { x: 3.5, y: 6 },
        { x: 4.5, y: 8 },
        { x: 5, y: 10 },
        { x: 5.5, y: 11 },
      ];
  return (
    <Container className='lne-chrt'>
 
   <Paper>
    <Chart
      data={data}
    >
      <ArgumentAxis />
      <ValueAxis />
  
      <LineSeries valueField="y" argumentField="x" />
    </Chart>
  </Paper>

    </Container>
  )
}

export default Linechartdata