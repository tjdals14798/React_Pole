import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import PoleList from "../com/poleList";
import { poleSearch } from "../modules/info";

function InfoContainer() {
    const info = useSelector(state => state.info);
    const dispatch = useDispatch();

    const onSearch = useCallback(id => dispatch(poleSearch(id),[dispatch]));

    return <PoleList info={info} onSearch={onSearch} />
}

export default InfoContainer;