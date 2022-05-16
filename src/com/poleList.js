import React,{useEffect, useRef, useState } from "react";
import "../Css/App.css";
import "../Css/Modal.css";
import { Line } from "react-chartjs-2";
import { Chart,registerables } from 'chart.js';
Chart.register(...registerables);

export default function PoleList({index,onKeyDown,ck,modal}){
    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
    },[])

    // const [chartInfo,setChartInfo] = useState({
    //     id:'',
    //     poleNum:'',
    //     poleDate:[],
    //     poleTilt:[],
    // })

    const onModal = (pole) =>{
        modal(true);
        console.log(pole.poleNum);
    }

    return(
        <div className="polelist">
            { ck &&<PoleChart modal={modal}/> }
            <input ref={inputRef} className="search" placeholder="search" onKeyDown={onKeyDown}></input>
            <table>
                <tbody>
                    <tr>
                        <th>전주 번호</th> <th>관리자</th>
                    </tr>

                    {index.map((pole,i) => (
                        <tr key={i}>
                            <td >{pole.poleNum}</td>
                            <td >{pole.poleAdmin}</td>
                            <td ><button className="chartbtn" onClick={onModal} > chart </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function PoleChart({modal}){
      
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            type: 'line',
            label: 'Dataset 1',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 2,
            data: [1, 2, 3, 4, 5],
          }
        ],
      };

    return (
      <div className="modalBackground">
        <div className="modalContainer">
        <div className="titleCloseBtn"><button onClick={() => modal(false)}> X </button></div>
              <div className="title"><h1>~번의 그래프</h1></div>
              <Line className="body" type="line" data={data} />
        </div>
      </div>
    );
};
