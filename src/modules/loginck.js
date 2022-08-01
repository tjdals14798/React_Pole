const LOGIN = 'loginck/LOGIN';
const LOGOUT = 'loginck/CKLOGIN';

const initialState = false;

export const logIn = ck => ({
    type: LOGIN,
    ck
});

export const logOut = ck => ({
    type: LOGOUT,
    ck
});

export default function member ( state = initialState, action ){
    switch (action.type) {
        case LOGIN:
            return state = action.ck;
        case LOGOUT:
            return state = action.ck;
        default:
            return state;
    }
}