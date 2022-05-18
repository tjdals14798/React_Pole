import React,{useEffect, useRef } from "react";
import "../Css/App.css";

export default function PoleList({ index, onKeyDown, onModal }){
    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
    },[])

    
    return(
        <div className="polelist">
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
            {/* <table>
                <tbody>
                    <tr>
                        <th>전주 번호</th> <th>관리자</th> <th>그래프</th>
                    </tr>

                    {index.map((pole,i) => (
                        <tr key={i}>
                            <td>{pole.poleNum}</td>
                            <td>{pole.poleAdmin}</td>
                            <td><button className="chartbtn" value={i} onClick={onModal} > Chart </button></td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div>
    );
}