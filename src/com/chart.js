import React from "react";
import index from "./pole"
import { useLocation } from "react-router-dom";
import { Container, Card, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header";
import Footer from "./footer";
import { Line } from "react-chartjs-2";
import { Chart,registerables } from 'chart.js';
Chart.register(...registerables);

export default  function PoleChart(){
  const {state} = useLocation("state");
    const data = {
      labels: index[state].poleDate,
      datasets: [
        {
          type: 'line',
          label: "기울기",
          borderColor: 'rgb(54, 162, 235)',
          borderWidth:2,
          data: index[state].poleTilt,
        }
      ],
    };
    
  return (
    <>
    <Header />
    <Container fluid="sm" className="mt-3">
      <Card className="text-center">
        <Card.Header className="fs-3">전주 번호 : {index[state].poleNum}</Card.Header>
        <Card.Body>
          <Line className="body" type="line" data={data} />
        </Card.Body>
        <Card.Footer className="text-muted"> {index[state].poleTilt[4]>=80? <Badge bg="success">안전</Badge>:<Badge bg="danger">위험</Badge>} </Card.Footer>  
      </Card>
    </Container>
    <Footer/>
    </>
  );
};