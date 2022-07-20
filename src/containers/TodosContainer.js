import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todos from "../com/poleInfo";
import { addTodo, toggleTodo, removeTodo } from "../modules/todos";

function TodosContainer() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onCreate = text => dispatch(addTodo(text));
    const onToggle = useCallback(id => dispatch(toggleTodo(id),[dispatch]));
    const onRemove = useCallback(id => dispatch(removeTodo(id),[dispatch]));

    return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} onRemove={onRemove} />
}

export default TodosContainer;