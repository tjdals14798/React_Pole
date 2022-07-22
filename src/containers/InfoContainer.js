import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PoleList from "../com/poleList";
import {} from "../modules/info";

function InfoContainer() {
    const info = useSelector(state => state.info);
    const dispatch = useDispatch();
    const [input,setinput] = useState("");

    const search = (pole) => {
        return pole.filter((item) => 
            item.poleNum.includes(input)
        );
      }

    const onSearch = text => setinput(text);
    return <PoleList info={search(info)} onSearch={onSearch}/>
}

export default InfoContainer;