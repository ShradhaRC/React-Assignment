import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import './LeftSide.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      data: [20, 80],
      backgroundColor: ['#FFD700', '#FFFACD'],
      borderColor: ['#FFD700', '#FFFACD'],
      borderWidth: 1,
      cutout: '80%',
    },
  ],
  labels: ['Label 1', 'Label 2'],
};

const options = {
  plugins: {
    legend: {
      position: 'bottom', // Display legend at the bottom
    },
  },
};

function RoundChart() {
  return (
    <>
     
        <Row className='rnd-chrt'>
          <Col style={{ width: '400px' }}>
            <Doughnut data={data} options={options} />
            <span><h3 style={{position:'relative',bottom:'200px',left:'160px',color:'#fff'}}>Data</h3></span>
          </Col>
        </Row>

    </>
  );
}

export default RoundChart;
