import { useState } from "react";
import EventComponent from "./EventComponent";


const EventComponent2 = () => {

    //state를 객체로 관리
    const [data, setData] = useState({name: '', topic: ''}); //state는 하나임

    const handleChange = (e) => {
        // console.log(e.target.name); //name 나옴
        // console.log(data) //{name: '', topic: ''} = state는 객체
        // 객체 안에서 key를 바꾸는 방법 ["키"] : 값
        const copy = {...data, [e.target.name]: e.target.value }; //데이터 복사 ▶ name의 값을 사용자가 입력한 값으로 바꾸기
        // console.log(copy);
        setData(copy); //name state 변경
    }
    
    /* 
        const handleTopic = (e) => {
            // console.log(e.target.name); //topic 나옴
            const copy = {...data, ["topic"] : e.target.value};
            setData(copy); //topic state 변경
        }
    */

    const handleClick = (e) => {
        alert(`${data.name}님 할 일: ${data.topic}`); //객체니까 data.name, data.topic
        setData({name: '', topic: ''}); //다시 초기화
    }

    return(
        <>
            <h3>리액트 이벤트 핸들링 (객체로)</h3>

            <input type="text" name="name" onChange={handleChange} value={data.name}/>
            <h3>결과: {data.name}</h3>

            <input type="text" name="topic" onChange={handleChange} value={data.topic}/>
            <h3>결과: {data.topic}</h3>

            <button type="button" onClick={handleClick}>click me</button>
        </>
    )

}

export default EventComponent2;