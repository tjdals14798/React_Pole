import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){

    const Navigate = useNavigate();

    const move = () =>{
        Navigate("/")
        console.log("작동")
    }
    return(
        <div>
            아무고토 없죠?
            <button onClick={move}>지우기</button>
        </div>
    );
}