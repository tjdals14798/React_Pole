import React,{useEffect, useRef } from "react";
import { Card, Button, Row, Col, Container, InputGroup, FormControl } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PoleList({ index, onKeyDown, onChart, onInfo }){
    useEffect(()=>{
        inputRef.current.focus();
        console.log(polestate);
    },[])
    const inputRef = useRef();
    const {polestate} = useLocation("poleInfo");

    return(
        <>
         <Container fluid="sm">
            <InputGroup size="lg" ref={inputRef} className="mt-4" onKeyDown={onKeyDown}>
                <FormControl placeholder="전주 번호 입력 후 Enter"/>
            </InputGroup>
        </Container>
        <Container fluid="xxl">
            <Row xs={1} md={3} className="justify-content-md-center">
                {index.map((pole,i) => (
                    <Col key={i} className="mt-4">
                        <Card style={{ width: '20rem',margin:'auto'}}>
                            <Card.Img variant="top" src={pole.poleImg} height="180" />
                            <Card.Body>
                                <Card.Title> 전주 번호 : {pole.poleNum} </Card.Title>
                                <Card.Text> 관리자 : {pole.poleAdmin} </Card.Text>
                                <Button value={i} onClick={onInfo} variant="dark">Info</Button>{' '}
                                <Button value={i} onClick={onChart} variant="dark">Chart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            </Container>
        </>
    );
}