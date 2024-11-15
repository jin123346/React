import { useReducer } from "react";

export default function useCounter(init,step){
    const[state,dispatch] = useReducer((state,action)=>{
        switch(action.type){
            case "update":
                return {count: state.count + action.step};
            case "reset":
                return {count: action.init};
            default:
                return state;
        }
    },
    {count: init}); 


    //핸들러 정의
    const btnUp = () => dispatch({type:"update",step});
    const btnDown = () => dispatch({type:"update",step: -step});
    const btnReset = () => dispatch({type:"reset",init});


    return [state,btnUp, btnDown,btnReset];
};


