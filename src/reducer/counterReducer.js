export const reducer = (state, action) => {
    console.log(action.data, "data");
    switch(action.type){
        case "INCREMENT" : return state + 1;
        case "DECREMENT" : return state - 1;
        case "RESET" : return 0;
        default: return 0;
    }
}
