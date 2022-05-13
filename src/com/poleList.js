import React from "react";
import "../App.css"

export default function PoleList({index,onChange}){
    return(
        <div className="polelist">
            <input className="search" placeholder="search" onChange={onChange}></input>
            <table>
                <tbody>
                    <tr>
                        <th>전주 번호</th> <th>관리자</th>
                    </tr>

                    {index.map((pole,i) => (
                        <tr key={i}>
                            <td >{pole.poleNum}</td>
                            <td >{pole.poleAdmin}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}