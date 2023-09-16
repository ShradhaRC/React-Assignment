import React from "react";
import Paper from "@material-ui/core/Paper";

import "./Doughnutchart.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/esm/ProgressBar";
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      data: [55, 20, 10, 5, 4, 3, 3],
      backgroundColor: [
        "#FFD700",
        "#FFFACD",
        "blue",
        "black",
        "green",
        "red",
        "purple",
      ],
      borderColor: [
        "#FFD700",
        "#FFFACD",
        "blue",
        "black",
        "green",
        "red",
        "purple",
      ],
      borderWidth: 1,
      cutout: "80%",
    },
  ],
  labels: [
    "Label 1",
    "Label 2",
    "Label 1",
    "Label 2",
    "Label 1",
    "Label 2",
    "Label 1",
  ],
};

const options = {
  plugins: {
    legend: {
      position: "bottom", // Display legend at the bottom
      labels: {
        font: {
          size: 8, // Set the desired font size for the labels
        },
      },
    },
  },
};

function Doughnutchart2() {
  return (
    <>
      <Row className="rnd-chrt dg">
        <Col style={{ width: "500px" }}>
          <Doughnut data={data} options={options} />
          <span>
            <h3
              style={{
                position: "relative",
                bottom: "200px",
                left: "146px",
                color: "#fff",
              }}
            >
              test
            </h3>
          </span>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Refreence</h2>
          <h6 style={{ color: "#fff" }}>Rating</h6>
        </Col>
      </Row>

     
      <div style={{padding:'0px 20px 0px 0px'}}>
      <Row>
        <Col>
        <h6 style={{ color: "#fff" }}>Day1</h6>
          <ProgressBar variant="info" now={85} label={`${85}%`} />
        </Col>
      </Row>
      <Row>
        <Col>
        <h6 style={{ color: "#fff" }}>Day2</h6>
          <ProgressBar variant="info" now={7} label={`${7}%`} />
        </Col>
      </Row>
      <Row>
        <Col>
        <h6 style={{ color: "#fff" }}>Day3</h6>
          <ProgressBar variant="info" now={12} label={`${12}%`} />
        </Col>
      </Row>
      <Row>
        <Col>
        <h6 style={{ color: "#fff" }}>Day4</h6>
          <ProgressBar variant="info" now={3} label={`${3}%`} />
        </Col>
      </Row>
      <Row>
        <Col>
        <h6 style={{ color: "#fff" }}>Day5</h6>
          <ProgressBar variant="info" now={2} label={`${2}%`} />
        </Col>
      </Row>
      
      </div>
    </>
  );
}

export default Doughnutchart2;
