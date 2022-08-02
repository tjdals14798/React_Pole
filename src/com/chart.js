import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Card, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Line } from "react-chartjs-2";
import { Chart,registerables } from 'chart.js';
Chart.register(...registerables);

export default  function PoleChart(){
  const location = useLocation();
  const {poleInfo} = location.state || {};

    const data = {
      labels: poleInfo.poleDate,
      datasets: [
        {
          type: 'line',
          label: "기울기",
          borderColor: 'rgb(54, 162, 235)',
          borderWidth:2,
          data: poleInfo.poleTilt,
        }
      ],
    };
    
  return (
    <>
    <Container fluid="sm" className="mt-3">
      <Card className="text-center">
        <Card.Header className="fs-3">전주 번호 : {poleInfo.poleNum}</Card.Header>
        <Card.Body>
          <Line className="body" type="line" data={data} />
        </Card.Body>
        <Card.Footer className="text-muted"> {poleInfo.poleTilt[poleInfo.poleDate.length-1]>=80? <Badge bg="success">안전</Badge>:<Badge bg="danger">위험</Badge>} </Card.Footer>  
      </Card>
    </Container>
    </>
  );
};