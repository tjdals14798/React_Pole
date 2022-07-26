const LOGIN = 'login/LOGIN';

export const Login = text => ({
    type:LOGIN,
    inputs:{
        id: text.value,
        password: text.value
    }
});

const initialState = [
    {
        id:"tjdals",
        password:"123"
    },
];

export default function login ( state = initialState, action ){
    switch(action.type) {
        default:
            return state;
    }
}
