import React,{useEffect, useRef } from "react";
import "../Css/App.css";
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PoleList({ index, onKeyDown, onChart, onInfo }){
    useEffect(()=>{
        inputRef.current.focus();
    },[])
    const inputRef = useRef();
    
    return(
        <>
        <input ref={inputRef} className="search" placeholder="search" onKeyDown={onKeyDown}></input>
        <Container fluid="xxl">
            <Row xs={1} md={3} className="g-1">
                {index.map((pole,i) => (
                    <Col key={i}>
                        <Card style={{ width: '20rem' }}>
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