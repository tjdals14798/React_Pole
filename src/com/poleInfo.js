/* global kakao */
import React, { useCallback, useEffect, useRef, useState } from "react";
import index from "./pole";
import "../Css/Modal.css"
import styled, { css } from 'styled-components';
import {MdDone, MdDelete} from 'react-icons/md'
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

    const { kakao } = window;

    const [listTodos,SetListTodos] = useState([
      {
        id: 0,
        text: '전주 점검',
        done: true
      },
      {
        id: 1,
        text: '부품 교체',
        done: false
      }
    ]);

    const [inputs,setInputs] = useState('');
    const onChange = (e) => {
      setInputs(e.target.value);
    }

    const nextId = useRef(3);
    const onCreate = (e) =>{
      e.preventDefault();
      const tList = {
        id: nextId.current,
        text: inputs,
        done: false
      }
      SetListTodos([...listTodos,tList])
      setInputs('');
      nextId.current +=1;
    }

    const onRemove = useCallback(
      id => {
      SetListTodos(listTodos.filter(todo => todo.id !== id));
      },[listTodos]
    );

    const onToggle = useCallback(
      id =>{
      SetListTodos(listTodos.map(todo=>
        todo.id === id ? {...todo,done: !todo.done}:todo));
    },[listTodos]
    );

    return(
    <>
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn"><button onClick={() => { Navigate("/") } }> X </button></div>
              <div className="title"><h1>전주 번호 : {index[state].poleNum}</h1></div>
              <table className="infoTable">
                <tbody>
                    <tr>
                        <td>최종변동 일</td><td>{index[state].poleDate[4]}</td>
                    </tr>
                    <tr>
                        <td>현재 기울기</td><td>{index[state].poleTilt[4]}</td>
                    </tr>
                    <tr>
                        <td>관리자</td><td>{index[state].poleAdmin}</td>
                    </tr>
                </tbody>
            </table>
            <div className="title"><h1>할 일</h1></div>

            <div className="todoList">
            {listTodos.map(todo => (
              <div key={todo.id}>
              <TodoItemBlock>
                <CheckCircle onClick={() => onToggle(todo.id)} done={todo.done}>{todo.done && <MdDone />}</CheckCircle>
                <Text done={todo.done}>{todo.text}</Text>
                  <Remove onClick={()=>{onRemove(todo.id)}}>
                    <MdDelete />
                  </Remove>
              </TodoItemBlock>
              </div>
            ))}
              <InsertForm onSubmit={onCreate}>
                <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" value={inputs} onChange={onChange}/>
              </InsertForm>
              </div>

            <div className="title"><h1>전주 위치</h1></div>
            <div className="poleMap">
        	    <div id="map" style={{width:"80%", height:"30vh"}}></div> 
            </div>
        </div>
    </div>
    </>  
    )
}

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const InsertForm = styled.form`
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

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

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
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