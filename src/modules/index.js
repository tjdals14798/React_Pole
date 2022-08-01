import { combineReducers } from 'redux';
import todos from './todos';
import info from './info';
import member from './member';
import insert from './insert';
import loginck from './loginck';

const rootReducer = combineReducers({
    todos,
    info,
    member,
    insert,
    loginck
});

export default rootReducer;