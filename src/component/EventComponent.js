import { useState } from "react";


const EventComponent = () => {

    //name을 저장할 useState
    const [name, setName] = useState('');

    //이벤트 함수의 첫번째 매개변수에 이벤트에 대한 정보를 넣어줍니다.
    const handleName = (e) => { /* 클래스형 컴포넌트에서는 this를 막 쓸수없음, this가 가르키는 대상이 달라지기 때문 */
        // console.log(e.target.value);
        setName(e.target.value); //state change
    }

    //topic
    const [topic, setTopic] = useState('');
    const handleTopic = (e) => { /* 함수의 첫번째 매개변수로 이벤트 객체를 받아줌 */
        setTopic(e.target.value);
    }

    //클릭 이벤트
    const handleClick = (e) => {
        alert(`${name}님의 주제는 ${topic}입니다`); //name과 topic은 현재 가리키고 있는 state 값
        setName(''); //input 데이터 초기화
        setTopic(''); //input 데이터 초기화
    }

    //엔터키의 처리
    const handlePress = (e) => {
        // console.log(e);
        if(e.keyCode === 13) { //엔터값
            handleClick(); //클릭이벤트 호출
        }
    }

    return(
        <>
            <h3>리액트의 이벤트 핸들링 (input데이터)</h3>
            <input type="text" name="name" onChange={handleName} value={name}/>{/* change이벤트-handleName함수 */}
            <div>체인지 된 결과: {name}</div>

            <input type="text" name="topic" onChange={handleTopic} onKeyUp={handlePress} value={topic}/>
            <div>체인지 된 결과: {topic}</div>

            <button type="button" onClick={handleClick}>click me</button>
        </>
    )
}

export default EventComponent;