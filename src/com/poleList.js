import React from "react";
import index from "./pole"
import "../App.css"

export default function PoleList(){

    return(
        <table >
            <th>번호</th>
            {index.map((p,i)=>(
                <tr>
                    <td key={i}>{p.poleNum}</td>
                </tr>
            ))}
        </table>
    );
}