import React, { useState } from "react";
import "../App.css"
import { Line } from "react-chartjs-2";
import { Chart,registerables } from 'chart.js';
Chart.register(...registerables);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
        data: [1, 2, 3, 4, 5],
      },
      {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: 'rgb(255, 99, 132)',
        data: [1, 2, 3, 4, 5, 6],
        borderColor: 'red',
        borderWidth: 2,
      },
      {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: 'rgb(75, 192, 192)',
        data: [1, 2, 3, 4, 5, 6],
      },
    ],
  };

export default function PoleChart(){
      
    return (
        <div className="canvas">
            넌 멋진 그래프가 될꺼야
            <Line type="line" data={data} /> 
        </div>
    );
};
