export const incrementCounter = () =>{
    return {
        type: "INCREMENT_COUNTER"
    }
}

export const saveUser = (text) => {
    return {
        type : "ADD_USER",
        payload: text
    }
}
