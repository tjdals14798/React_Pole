import React from "react";
import index from "./pole";
import "../Css/Modal.css"
import { useLocation, useNavigate } from "react-router-dom";

export default function PoleInfo(){
    const {state} = useLocation();
    const Navigate = useNavigate();
    const home=()=>{
      Navigate("/");
    }

    return(
    <>
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn"><button onClick={home}> X </button></div>
              <div className="title"><h1>전주 번호 : {index[state].poleNum}</h1></div>
              <table className="infoTable">
                <tbody>
                    <tr>
                        <td>전주 번호</td><th>{index[state].poleNum}</th>
                    </tr>
                    <tr>
                        <td>변동 일</td><th>{index[state].poleDate[4]}</th>
                    </tr>
                    <tr>
                        <td>현재 기울기</td><th>{index[state].poleTilt[4]}</th>
                    </tr>
                    <tr>
                        <td>관리자</td><th>{index[state].poleAdmin}</th>
                    </tr>
                </tbody>
            </table>    
        </div>
    </div>
           
    </>  
    )
}