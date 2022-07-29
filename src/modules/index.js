import { combineReducers } from 'redux';
import todos from './todos';
import info from './info';
import member from './member';
import insert from './insert';

const rootReducer = combineReducers({
    todos,
    info,
    member,
    insert
});

export default rootReducer;