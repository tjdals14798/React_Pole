/* global kakao */
import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { useLocation } from "react-router-dom";
import styled, { css } from 'styled-components';
import {MdDone, MdDelete} from 'react-icons/md'
import { Form, Container, Table, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoItem = React.memo(function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <Nav className="align-items-center p-1">
      <CheckCircle onClick={() => onToggle(todo.id) } done={todo.done}>{todo.done && <MdDone />}</CheckCircle>
      <Text done={todo.done}>{todo.text}</Text>
      <Remove onClick={()=> onRemove(todo.id) }><MdDelete/></Remove>
    </Nav>
  );
});

const TodoList = React.memo(function TodoList({ todos, onToggle, onRemove }) {
  return (
    <>
      {todos.map(todo => (
        <tr key={todo.id}>
          <td>
            <TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove} />
          </td>
        </tr>
      ))}
    </>
  );
});

export default function PoleInfo({ todos, onCreate, onToggle, onRemove }){  
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
    
    const location = useLocation();
    const {poleInfo} = location.state || {};
    const { kakao } = window;

    const [text, setText] = useState('');
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
      e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
      onCreate(text);
      setText(''); // 인풋 초기화
    }

    // const [inputs,setInputs] = useState('');
    // const onChange = (e) => {
    //   setInputs(e.target.value);
    // }

    // const nextId = useRef(2);
    // const onCreate = (e) =>{
    //   e.preventDefault();
    //   const tList = {
    //     id: nextId.current,
    //     text: inputs,
    //     done: false
    //   }
    //   SetListTodos([...listTodos,tList])
    //   setInputs('');
    //   nextId.current +=1;
    // }

    // const onRemove = useCallback(
    //   id => {
    //   SetListTodos(listTodos.filter(todo => todo.id !== id));
    //   },[listTodos]
    // );

    // const onToggle = useCallback(
    //   id =>{
    //   SetListTodos(listTodos.map(todo => todo.id === id ? {...todo,done: !todo.done}:todo));
    // },[listTodos]
    // );

    return(
    <>
      <Header />
      <Container fluid='xl' className="mt-4">
        <Table striped bordered hover variant="dark" className="m-auto w-75">
            <thead>
              <tr>
                <th style={thStyle} colSpan={2}>전주번호 : {poleInfo.poleNum}</th>
              </tr>
            </thead>
          <tbody>
            <tr>
              <td>관리자</td>
              <td>{poleInfo.poleAdmin}</td>
            </tr>
            <tr>
              <td>현재 기울기</td>
              <td>{poleInfo.poleTilt[poleInfo.poleTilt.length-1]}</td>
            </tr>
            <tr>
              <td>최종변동 일</td>
              <td>{poleInfo.poleDate[poleInfo.poleDate.length-1]}</td>
            </tr>
          </tbody>
        </Table>
        <Table striped bordered hover variant="dark" className="m-auto mt-4 w-75">
            <thead>
              <tr>
                <th style={thStyle}>할 일</th>
              </tr>
            </thead>
          <tbody>
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
              <tr>
                <td>
                  <Form onSubmit={onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>할 일 추가</Form.Label>
                      <Form.Control type="text" autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" value={text} onChange={onChange}/>
                    </Form.Group>
                  </Form>
                </td>
              </tr>
          </tbody>
        </Table>
        <Table striped bordered hover variant="dark" className="m-auto mt-4 w-75">
          <thead>
            <tr>
              <th style={thStyle}>전주 위치</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th id="map" style={{width:"60%", height:"30vh"}}></th>
            </tr>
          </tbody>
        </Table>
      </Container>  
    <Footer />
    </>
    )
}

const thStyle={
  fontSize:"24px"
}

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const CheckCircle = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 13px;
  border: 1px solid #ced4da;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;