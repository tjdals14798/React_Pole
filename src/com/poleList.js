import React,{useEffect, useRef, useState } from "react";
import "../Css/App.css";

export default function PoleList({ index, onKeyDown, onChart, onInfo, loginId }){
    const inputRef = useRef();

    const [loginName,setLoginName] = useState("");
    useEffect(()=>{
        inputRef.current.focus();
        setLoginName(loginId);
    },[])
    
    return(
        <>
            <input ref={inputRef} className="search" placeholder="search" onKeyDown={onKeyDown}></input> <span className="loginId">접속 아이디 : {loginName}</span>
            <div className="container">
            {index.map((pole,i) => (
                <div className="items" key={i}>
                    <p>전주 번호 : {pole.poleNum}</p>
                    <img src={pole.poleImg} width="100%" height="60%"></img>
                    <p>관리자 : {pole.poleAdmin}</p>
                    <button className="chartbtn" value={i} onClick={onInfo} > Info </button>
                    <button className="chartbtn" value={i} onClick={onChart} > Chart </button>
                </div>
                    ))}
            </div>
        </>
    );
}