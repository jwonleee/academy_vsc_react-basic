
//리듀서 선언 - 매개변수로 (현재의 state, 업데이트에 필요한 정보)

import { useEffect, useReducer } from "react";

import {myReducer} from './HookReducerComponent';

//action을 판단해서 state를 체인지
/* 
const myReducer = (state, action) => {
    //action은 객체
    // console.log(state);
    // console.log(action);
    if(action.type === 'increase') {
        state = {value: state.vlaue +1};
    } else if(action.type === 'decrease') {
        state = {value: state.vlaue -1};
    } else if(action.type === 'reset') {
        state = {value: 0};

    }

    return state; //변화된 값에 대한 결과를 return (반드시 걸어주기)
}
 */

const HookReducer = () => {

    const [state, func] = useReducer(myReducer, {value: 0}); //(외부에서 사용할 리듀서함수, 리듀서가 가져야할 초기값)

    /* 
    useEffect( () => {
        func({type: 'increase'}); //리듀서를 실행시키고, myReducer의 action으로 전달됩니다.

    }, []);

    console.log(state);
    */

    const up = () => {
        func({type: "increase"});
    }


    return (
        <>
            <button onClick={up}>증가</button>
            <button onClick={ () => func({type:"decrease"}) } >감소</button>
            <button onClick={ () => func({type:"reset"}) }>초기화</button>
            결과 {state.value} {/* state는 객체여서 state.value 해야함 */}
        </>
    )
}

export default HookReducer;