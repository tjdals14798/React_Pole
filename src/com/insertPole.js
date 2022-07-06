import React, { useState } from "react";
import "../Css/Modal.css"
import Header from "./header";
import Footer from "./footer";
import { Container, Table, InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

export default function InsertPole(){

    const Navigate = useNavigate();

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

    const onCreate = (e) =>{
        Navigate("/",{state:{insertPole:inputs}});
      }

    return(
        <>
        <Header/>
        <Container fluid='xl' className="mt-4 ">
            <Table striped bordered variant="dark" className="m-auto mt-4 w-75">
                <thead>
                    <tr>
                        <th>전주 등록</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>전주 번호</td></tr>
                    <tr>
                        <td>
                        <InputGroup className="p-auto" >
                            <FormControl placeholder="전주 번호를 입력하세요" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={poleNum} name="poleNum" onChange={onChange}/>
                        </InputGroup>
                        </td>
                    </tr>
                    <tr><td>설치 일자</td></tr>
                    <tr>
                        <td>
                            <InputGroup className="p-auto" >
                                <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="설치 일자를 입력하세요" value={poleDate} name="poleDate" onChange={onChange}/>
                            </InputGroup>
                        </td>
                    </tr>
                    <tr><td>관리자 이름</td></tr>
                    <tr>
                        <td>
                            <InputGroup className="p-auto" >
                                <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="관리자 이름을 입력하세요" value={poleAdmin} name="poleAdmin" onChange={onChange}/>
                            </InputGroup>
                        </td>
                    </tr>
                    <tr><td>이미지 주소</td></tr>
                    <tr>
                        <td>
                            <InputGroup className="p-auto" >
                                <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="이미지 주소를 입력하세요" value={poleImg} name="poleImg" onChange={onChange}/>
                            </InputGroup>
                        </td>
                    </tr>
                    <tr><td><Button variant="dark" className="w-25" onClick={onCreate}>전송</Button></td></tr>
                </tbody>
            </Table>
        </Container>
        <Footer/>
        </>
    )
}
