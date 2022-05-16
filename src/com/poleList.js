import React,{useEffect, useRef, useState } from "react";
import "../Css/App.css";
import "../Css/Modal.css";
import { Line } from "react-chartjs-2";
import { Chart,registerables } from 'chart.js';
Chart.register(...registerables);

export default function PoleList({index,onKeyDown,ck,modal}){
    const inputRef = useRef();
    const [idx,setIdx] = useState('');

    useEffect(()=>{
        inputRef.current.focus();
    },[])

    // const [chartInfo,setChartInfo] = useState({
    //     id:'',
    //     poleNum:'',
    //     poleDate:[],
    //     poleTilt:[],
    // })

    const onModal = (e) =>{
        setIdx(e.target.value)
        modal(true)
    }
    
    return(
        <div className="polelist">
            { ck && <PoleChart modal={modal} idx={idx} index={index}/> }
            <input ref={inputRef} className="search" placeholder="search" onKeyDown={onKeyDown}></input>
            <table>
                <tbody>
                    <tr>
                        <th>전주 번호</th> <th>관리자</th>
                    </tr>

                    {index.map((pole,i) => (
                        <tr key={i}>
                            <td>{pole.poleNum}</td>
                            <td>{pole.poleAdmin}</td>
                            <td><button className="chartbtn" value={i} onClick={onModal} > chart </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function PoleChart({modal,index,idx}){
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
        <div className="titleCloseBtn"><button onClick={() => modal(false)}> X </button></div>
              <div className="title"><h1>전주 번호 : {index[idx].poleNum}</h1></div>
              <Line className="body" type="line" data={data} />
        </div>
      </div>
    );
};
