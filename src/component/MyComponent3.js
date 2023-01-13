import { Component } from "react";


class MyComponent3 extends Component { /* 리액트에서 제공하는 Component라는 모듈을 상속 받아야 함 */

    //클래스형 컴포넌트를 render 함수 안에서 return문을 작성
    render() {
        return (
            <div>아... 이건 클래스형 컴포넌트</div>
        )
    }

}

export default MyComponent3;