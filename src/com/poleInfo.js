/* global kakao */
import React, { useEffect } from "react";
import index from "./pole";
import "../Css/Modal.css"
import { useLocation, useNavigate } from "react-router-dom";

export default function PoleInfo(){
    useEffect(()=>{
        var container = document.getElementById('map');
        var options = {
          center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
          level: 3
        };
        var map = new kakao.maps.Map(container, options);
        var markerPosition  = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488); 
        var marker = new kakao.maps.Marker({
          position: markerPosition
      });
      marker.setMap(map);
    }, []);

    const {state} = useLocation();
    const Navigate = useNavigate();
    const home=()=>{
      Navigate("/");
    }

    const { kakao } = window;

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
                        <td>최종변동 일</td><th>{index[state].poleDate[4]}</th>
                    </tr>
                    <tr>
                        <td>현재 기울기</td><th>{index[state].poleTilt[4]}</th>
                    </tr>
                    <tr>
                        <td>관리자</td><th>{index[state].poleAdmin}</th>
                    </tr>
                </tbody>
            </table>
            <div className="title"><h1>전주 위치</h1></div>
            <div className="poleMap">
        	<div id="map" style={{width:"80%", height:"30vh"}}></div> 
        </div>
        </div>
    </div>
    </>  
    )
}