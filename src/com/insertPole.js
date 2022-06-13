import React, { useState } from "react";
import "../Css/Modal.css"
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 80%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const InsertForm = styled.form`
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

const TitleName = styled.h2`
    text-align: left;
    padding-left: 10%;
`;

const SubmitBtn = styled.button`
    margin-top: 5%;
    font-size: 1em;
    width: 20%;
    background: none;
    border: 1px solid #dee2e6;
    margin-left: 40%;
`;

export default function InsertPole(){

    const Navigate = useNavigate();
    const home=()=>{
        Navigate("/");
      }

    const [inputs,setInputs] = useState({
        poleNum: '',
        poleDate: '',
        poleAdmin: '',
        poleImg:''
    });

    const { poleNum, poleDate, poleAdmin, poleImg } = inputs;
    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]:value
        });
    };

    const onClick = () => {
        //console.log(inputs);
        Navigate("/",{poleInfo:inputs})
    }

    return(
        <>
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn"><button onClick={home}> X </button></div>
                <h1> 전주 등록 </h1>
                <InsertForm>
                    <TitleName>전주 번호</TitleName>
                    <Input placeholder="전주 번호를 입력 하세요" onChange={onChange} name="poleNum" value={poleNum}/>
                    <TitleName>설치 일자</TitleName>           
                    <Input placeholder="설치 일자를 입력 하세요" onChange={onChange} name="poleDate" value={poleDate}/>
                    <TitleName>관리자 이름</TitleName>       
                    <Input placeholder="관리자 이름을 입력 하세요" onChange={onChange} name="poleAdmin" value={poleAdmin}/>
                    <TitleName>이미지 주소</TitleName>
                    <Input placeholder="이미지 주소를 입력 하세요" onChange={onChange} name="poleImg" value={poleImg}/>
                </InsertForm>
                <SubmitBtn onClick={onClick}>전송</SubmitBtn>
            </div>
        </div>
        </>
    )
}