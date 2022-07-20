const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextId = 2;
export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text: text
    }
});

export const toggleTodo = id =>({
    type: TOGGLE_TODO,
    id
});

export const removeTodo = id => ({
    type: REMOVE_TODO,
    id
});

const initialState = [
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
];

export default function todos ( state = initialState, action ) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map(
                todo => 
                todo.id === action.id
                ? {...todo, done: !todo.done}
                :todo
            );
        case REMOVE_TODO:
            return state.filter(
                todo =>
                todo.id !== action.id
            );
        default:
            return state;
    }
}