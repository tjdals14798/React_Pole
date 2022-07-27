const initialState = [
    {
        id:"tjdals",
        password:"123"
    },
    {
        id:"rla",
        password:"1234"
    },
];

export default function member ( state = initialState, action ){
    switch (action.type) {
        default:
            return state;
    }
}
