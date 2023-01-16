import { useState } from "react";

const StateComponent = () => {

    /* 
        state란 컴포넌트에서 변화하는 값을 의미
        state가 변경되면 컴포넌트를 리렌더링 시킴
        함수형 컴포넌트에서는 useState()를 사용함
    */
    
    // 함수형 컴포넌트 useState()를 사용합니다.
    // let data = useState('초기값'); 콘솔로 찍었을때 data는 배열
    // console.log(data);
    // let a = data[0];
    // let b = data[1];

    // 2nd - 구조 분해 할당 사용, 배열에서는 이름 의미 없고, 객체의 구조분해할당에서는 이름 의미 있음
    let [data, setData] = useState('초기값');
    // console.log(data); //state값
    // console.log(setData); //state setter 함수
    let func = () => { //함수 만들어서 변경
        setData('변경');
        console.log(data);
    }
    let enter = () => setData('입장');
    let exit = () => setData('퇴장');


    //state는 여러 개일 수 있습니다.
    let [color, setColor] = useState('red');
    

    // data = '1'; 이런식으로 강제로 바꾸면 리렌더링이 안 들어감 - 에러가없다는 화면을 다시 그린게 아님 !절대안됨!

    return (
        <>
            <h3 style={{'color': color}}>state 값: {data}</h3> {/* 왼쪽은 속성명 color, 오른쪽은 위의 state의 color */}
            <button onClick={ func }>값 변경하기</button>
            <button onClick={ enter }>입장</button>
            <button onClick={ exit }>퇴장</button>

            <hr/>
            <button onClick={ () => setColor('red') }>붉은색</button>
            <button onClick={ () => setColor('blue') }>푸른색</button>
            <button onClick={ () => setColor('yellow') }>그 사이 3초 그 짧은 색인 노랑색</button>
        </>
    )

}

export default StateComponent;