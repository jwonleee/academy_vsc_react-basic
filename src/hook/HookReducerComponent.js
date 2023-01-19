

import { useEffect, useReducer } from "react";

//1. myReducer
//action을 판단해서 state를 체인지
const myReducer = (state, action) => {
    //action은 객체
    // console.log(state);
    // console.log(action);
    if(action.type === 'increase') {
        state = {value: state.value +1};
    } else if(action.type === 'decrease') {
        state = {value: state.value -1};
    } else if(action.type === 'reset') {
        state = {value: 0};

    }

    return state; //변화된 값에 대한 결과를 return (반드시 걸어주기)

}


//2. nameReducer
const nameReducer = (state, action) => {

    console.log(action.name); //e.target.name
    
    // if(action.name == "name") {
    //     state = {...state, ["name"]:action.value};
    // } else if(action.name == "age") {
    //     state = {...state, ["age"]:action.value};
    // }
   
    state = {...state, [action.name]: action.value}; //위의 if조건문과 같음

    return state;
}

//기본 디폴트 모형
export {myReducer, nameReducer};