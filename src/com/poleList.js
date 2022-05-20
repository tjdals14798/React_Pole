import React,{useEffect, useRef } from "react";
import "../Css/App.css";

export default function PoleList({ index, onKeyDown, onModal }){
    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
    },[])

    
    return(
        <>
            <input ref={inputRef} className="search" placeholder="search" onKeyDown={onKeyDown}></input>
            <div className="container">
            {index.map((pole,i) => (
                <div className="items" key={i}>
                    <p>전주 번호 : {pole.poleNum}</p>
                    <img src={pole.poleImg} width="100%" height="60%"></img>
                    <p>관리자 : {pole.poleAdmin}</p>
                    <button className="chartbtn" value={i} onClick={onModal} > Info </button>
                    <button className="chartbtn" value={i} onClick={onModal} > Chart </button>
                </div>
                    ))}
            </div>
        </>
    );
}