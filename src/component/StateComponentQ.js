import { useState } from "react";


const StateComponentQ = () => {

    //const로 선언하면 직접 값을 바꾸는 것 불가능
    //++count로 state를 직접 수정하면 안됩니다.
    const [count, setCount] = useState(0); //state, set state

    return (
        <div>
        <h3>실습</h3>
        <h3>카운트: {count}</h3>
        
        {/* 항상 state 값을 setter 메서드를 이용해야 함 */}
        <button onClick={ () => setCount(count+1)}>증가</button>
        <button onClick={ () => setCount(count-1)}>감소</button>
        <button onClick={ () => setCount(0)}>초기화</button>
        </div>
    )

}

export default StateComponentQ;