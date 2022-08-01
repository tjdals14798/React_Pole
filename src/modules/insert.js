const ADD_POLE = 'insert/ADD_POLE';
const REMOVE_POLE = 'insert/REMOVE_POLE';

let nextId = 5;

export const addPole = text => ({
    type: ADD_POLE,
    inputs:{
        id: nextId++,
        poleNum: text.poleNum,
        poleDate: [text.poleDate,],
        poleTilt: [90,],
        poleAdmin: text.poleAdmin,
        poleImg: text.poleImg
    }
});

const initialState = [
    
];

export default function insert ( state = initialState, action ){
    switch(action.type) {
        case ADD_POLE:
            return state = action.inputs;
        case REMOVE_POLE:
            return state = action.inputs;
        default:
            return state;
    }
}