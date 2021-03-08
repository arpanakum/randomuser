const { Switch } = require("react-router-dom");

const initialState = {
    counter:0,
    user:''
};
export const setCounter = (state=initialState,actions={}) => {
    switch(actions.type){
        case 'INCREMENT_COUNTER': return {...state,counter:state.counter+1};
        default: return state;
    }
}

export const setUser = (state=initialState,actions={}) => {
    switch(actions.type){
        case "ADD_USER": return {...state, user:actions.payload}
        default: return state;
    }
}