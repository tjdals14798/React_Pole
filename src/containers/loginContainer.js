import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../com/login";
import "../modules/member";

function LoginContainer () {
    const member = useSelector(state => state.member);
    const dispatch = useDispatch();

    const testMem = () => console.log("성공");
    const findMember = useCallback(id => dispatch(findMember(id),[dispatch]));
    // const login = member.filter(findMember());
    //   const onClick = () =>{
    //       if(member.id === id && member.password === password){
    //         //   Navigate("/",{state: { loginck:inputsId }});
    //         }else{
    //             alert("실패");
    //         }
    //     }
    return <Login testMem={testMem} findMember={findMember}/>
}

export default LoginContainer;

