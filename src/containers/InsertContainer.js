import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import InsertPole from "../com/insertPole";
import { addPole } from "../modules/insert";
import { useNavigate } from "react-router-dom";

function InsertContainer (){
    let insert = useSelector(state => state.insert);
    useEffect(()=>{
        if(insert.id!=null){
            Navigate("/",{state:{insertPole:insert}});
        }
        insert=[];
    },[insert]);
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    
    console.log(insert)
    const onCreate = text => dispatch(addPole(text));
    return <InsertPole onCreate={onCreate} />
}

export default InsertContainer;