import { Component } from "react";


class MyComponent3 extends Component { /* 리액트에서 제공하는 Component라는 모듈을 상속 받아야 함 */
    /* 
        state는 생성자 안에서 초기화를 합니다.
        state의 접근은 this.state를 이용해서 접근합니다.
        state는 반드시 객체모형 이어야 합니다.

        클래스형에서는 생성자를 작성할 때 반드시 props를 받고, super를 통해서 부모 컴포넌트에 연결해야 합니다.
    */
    constructor(props) { //이렇게 해줘야 error를 피할 수 있음
        super(props);
        this.state = { //this.state는 반드시 객체 모형이어야 함
            a: 1,
            b: props.name //부모로부터 전달받은 name
        }
    }


    //클래스형 컴포넌트를 render 함수 안에서 return문을 작성
    render() {

        let {name} = this.props; //props
        console.log(name);
        
        return (
            <>
                <hr/>
                <div>아... 이건 클래스형 컴포넌트</div>
                state값: {this.state.a};
                state값: {this.state.b};
            </>
        )
    }

}

export default MyComponent3;