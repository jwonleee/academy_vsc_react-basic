import { Fragment } from "react";
import MyComponent from "./component/MyComponent";
import MyComponent2 from "./component/MyComponent2";
import MyComponent3 from "./component/MyComponent3";

/* ES6 문법 */
const App = () => {
    return (
        <Fragment>
        <h3>App.JS</h3>
        <MyComponent /> {/* 하나로 끝나는 태그, 재활용 가능 */}
        {/* <MyComponent /> 주석처리 가능 */}
        {/* props: 하위 컴포넌트로 전달되는 데이터 값 */}
        <MyComponent name={'홍길동'} age={20} email={'aaa@naver.com'} /> {/* (1) 상위 컴포넌트에서 값을 넣고 */}
        <MyComponent2 name={'이순신'} />
        <MyComponent2 name={'홍길자'}/>

        {/* 클래스형 props */}
        <MyComponent3 name={'세종대왕'}/>
        </Fragment>
    )
}

export default App;