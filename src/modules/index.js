import { combineReducers } from 'redux';
import todos from './todos';
import info from './info';

const rootReducer = combineReducers({
    todos,
    info
});

export default rootReducer;