const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

let nextId = 2;
export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text: text,
        done: false
    }
});

export const toggleTodo = id =>({
    type: TOGGLE_TODO,
    id
})

const initialState = [

];

