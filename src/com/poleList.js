import React, { useState } from "react";
import index from "./pole"
import "../App.css"

function Pole({pole}){
    return(
        <tr>
            <td >{pole.poleNum}</td>
            <td >{pole.poleAdmin}</td>
        </tr>
    )
}

export default function PoleList(){

    const [pole,setPole] = useState([index]);
    const [input,setInput] = useState('');

    return(
        <div className="polelist">

            <input placeholder="전주 번호"></input> <button onClick={()=>{
                console.log("클릭");
            }}>검색</button>

            <table>
                <thead>
                    <tr>
                        <th>전주 번호</th> <th>관리자</th>
                    </tr>
                </thead>

                <tbody>
                    {index.map((pole,i) =>(
                        <Pole pole={pole} key={i}/>
                    ))}
                </tbody>

            </table>
        </div>
    );
}