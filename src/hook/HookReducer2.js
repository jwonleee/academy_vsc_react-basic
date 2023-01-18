import { useReducer } from "react";

import { nameReducer } from "./HookReducerComponent";

/* 
//리듀서
const nameReducer = (state, action) => {

    // console.log(action.name); //e.target.name
    
    // if(action.name == "name") {
    //     state = {...state, ["name"]:action.value};
    // } else if(action.name == "age") {
    //     state = {...state, ["age"]:action.value};
    // }
   
    state = {...state, [action.name]: action.value}; //위의 if조건문과 같음

    return state;
}
 */

const HookReducer2 = () => {
    //[state, 리듀서 제어함수] = useReducer(리듀서, 초기값);
    const [state, func] = useReducer(nameReducer, {name: '', age:''});

    const {name, age} = state; //스테이트 값 구조분해 할당

    return (
        <>
            이름: <input type="text" name="name" onChange={ (e) => func(e.target) }/>
            나이: <input type="text" name="age" onChange={ (e) => func(e.target) }/> {/* e.target 각각 구분 가능해서 똑같아도 됨 */}

            결과값: {name}<br/>
            결과값: {age}<br/>
        </>
    )
}

export default HookReducer2;