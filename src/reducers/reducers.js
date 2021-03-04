const { Switch } = require("react-router-dom");

const initialState = {
    counter:0
};
export const setCounter = (state=initialState,actions={}) => {
    switch(actions.type){
        case 'INCREMENT_COUNTER': return {...state,counter:state.counter+1};
        default: return state;
    }
}