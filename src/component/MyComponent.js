
/* 
    책 p.87
    컴포넌트 선언방법은 크게 2가지 (함수형, 클래스)
    컴포넌트는 여러개 일 수 있습니다.

    모듈 내보내기 export default
    모듈 가져오기 import ~~ from 경로

    p.96 (props)
    1. 상위 컴포넌트에서 하위 컴포넌트로 전달하는 매개변수
    2. 객체 형태로 전달되기 때문에 {}로 값을 받습니다.
    3. props는 읽기전용입니다. (값은 부모에서 바꿔서 전달합니다.)
*/

import PropTypes from 'prop-types';
import { Fragment } from "react";

const MyComponent = (/* props */ {name, age, email, addr}) => { /* 첫번째 매개변수로 props를 받음 */

    // 1st
    // console.log(props);
    // const a = props.name; /* (2) 하위 컴포넌트에서 받아서 값을 뿌려줌 */
    // const b = props.age;
    // const c = props.email;

    // 2nd
    // const {name, age, email} = props; /* 구조 분해 할당 */
    
    return (
        <Fragment>
        <div>나의 첫번째 컴포넌트</div>
        <div>props값: {name}</div>
        <div>props값: {age}</div>
        <div>props값: {email}</div>
        <div>default props값: {addr}</div>
        </Fragment>
    )
}

/* props의 기본값 지정하기 - 컴포넌트명.defaultProps = {} */
MyComponent.defaultProps = {
    name: '이름 없음',
    age: 0,
    email: '지정 안됨',
    addr: "서울시" //addr은 전달되지 않음
}

/* props의 타입검증 - 컴포넌트명.propTypes = {} */
MyComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string.isRequired //문자열 타입, 반드시 전달
}

export default MyComponent; /* MyComponent를 반환해주겠다 */