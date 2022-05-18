import React, { useState } from "react";
import "../Css/Modal.css";
import { Line } from "react-chartjs-2";
import { Chart,registerables } from 'chart.js';
Chart.register(...registerables);



export default  function PoleChart({ setmodal, index, idx}){
  const data = {
      labels: index[idx].poleDate,
      datasets: [
        {
          type: 'line',
          label: "기울기",
          borderColor: 'rgb(54, 162, 235)',
          borderWidth:2,
          data: index[idx].poleTilt,
        }
      ],
    };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
      <div className="titleCloseBtn"><button onClick={() => setmodal(false)}> X </button></div>
            <div className="title"><h1>전주 번호 : {index[idx].poleNum}</h1></div>
            <Line className="body" type="line" data={data} />
      </div>
    </div>
  );
};