import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todos from "../com/poleInfo";
import { addTodo, toggleTodo, removeTodo } from "../modules/todos";
import { useLocation } from "react-router-dom";

function TodosContainer() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const location = useLocation();

    const {poleInfo} = location.state || {};
    const onCreate = text => dispatch(addTodo(text));
    const onToggle = useCallback(id => dispatch(toggleTodo(id),[dispatch]));
    const onRemove = useCallback(id => dispatch(removeTodo(id),[dispatch]));

    return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} onRemove={onRemove} poleInfo={poleInfo}/>
}

export default TodosContainer;