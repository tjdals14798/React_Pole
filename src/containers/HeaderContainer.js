import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../com/header";
import {logOut} from "../modules/loginck";


function HeaderContainer(){
    const loginck = useSelector(state => state.loginck);
    console.log(loginck);
    const dispatch = useDispatch();

    const logout = ck => dispatch(logOut(ck));

    return <Header loginck={loginck} logout={logout}/>
}

export default HeaderContainer;