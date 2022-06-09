import React from "react";
import "../Css/Modal.css"
import styled, { css } from 'styled-components';
import { useLocation, useNavigate } from "react-router-dom";

export default function InsertPole(){

    const Navigate = useNavigate();
    const home=()=>{
        Navigate("/");
      }
    return(
        <>
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn"><button onClick={home}> X </button></div>
                <h1> 전주 등록 </h1>
            </div>
        </div>
        </>
    )
}