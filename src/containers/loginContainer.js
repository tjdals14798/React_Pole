import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../com/login";
import "../modules/member";

function LoginContainer () {
    const member = useSelector(state => state.member);

    return <Login member={member}/>
}

export default LoginContainer;

