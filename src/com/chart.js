import React from "react";
import "../Css/Modal.css";
import index from "./pole"
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { Chart,registerables } from 'chart.js';
Chart.register(...registerables);

const Tiltden = styled.h2`
    text-align: center;
    color: red;
`;
const Tiltsaf = styled.h2`
    text-align: center;
    color: blue;
`;

export default  function PoleChart(){
  const {state} = useLocation("state");
  const Navigate = useNavigate();
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
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn"><button onClick={() => { Navigate("/") }}> X </button></div>
              <div className="title"><h1>전주 번호 : {index[state].poleNum}</h1></div>
              <Line className="body" type="line" data={data} />
              <br/>
          {index[state].poleTilt[4]>=80?<Tiltsaf>안전</Tiltsaf>:<Tiltden>위험</Tiltden>}
        </div>
    </div>
  );
};