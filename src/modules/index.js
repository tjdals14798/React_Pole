import { combineReducers } from 'redux';
import todos from './todos';
import info from './info';
import member from './member';

const rootReducer = combineReducers({
    todos,
    info,
    member
});

export default rootReducer;