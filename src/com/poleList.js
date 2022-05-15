import React,{useEffect, useRef } from "react";
import "../Css/App.css";

export default function PoleList({index,onKeyDown,openmodal}){
    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
    },[])

    return(
        <div className="polelist">
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
                            <td className="chartbtn" onClick={openmodal}>chart</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}