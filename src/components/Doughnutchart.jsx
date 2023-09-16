import React from "react";
import Paper from "@material-ui/core/Paper";

import "./Doughnutchart.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ProgressBar } from "react-bootstrap";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      data: [60, 20, 20],
      backgroundColor: ["#FFD700", "#FFFACD", "#000"],
      borderColor: ["#FFD700", "#FFFACD", "#000"],
      borderWidth: 1,
      cutout: "80%",
    },
  ],
  labels: ["Label 1", "Label 2", "Lable 3"],
};

const options = {
  plugins: {
    legend: {
      position: "bottom", // Display legend at the bottom
      labels: {
        font: {
          size: 12, // Set the desired font size for the labels
        },
      },
    },
  },
};

function Doughnutchart() {
  return (
    <>
      <Row className="rnd-chrt dg">
        <Col style={{ width: "400px" }}>
          <Doughnut data={data} options={options} />
          <span>
            <h3
              style={{
                position: "relative",
                bottom: "199px",
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
          <ProgressBar variant="info" now={14} label={`${14}%`} />
        </Col>
      </Row>
      <Row>
        <Col>
        <h6 style={{ color: "#fff" }}>Day2</h6>
          <ProgressBar variant="info" now={12} label={`${12}%`} />
        </Col>
      </Row>
      <Row>
        <Col>
        <h6 style={{ color: "#fff" }}>Day3</h6>
          <ProgressBar variant="info" now={10} label={`${10}%`} />
        </Col>
      </Row>
      <Row>
        <Col>
        <h6 style={{ color: "#fff" }}>Day4</h6>
          <ProgressBar variant="info" now={8} label={`${8}%`} />
        </Col>
      </Row>
      <Row>
        <Col>
        <h6 style={{ color: "#fff" }}>Day1</h6>
          <ProgressBar variant="info" now={6} label={`${6}%`} />
        </Col>
      </Row>
     
      </div>
    </>
  );
}

export default Doughnutchart;
