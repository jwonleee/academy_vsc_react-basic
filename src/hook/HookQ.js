import { useEffect, useState, useRef } from "react";



const HookQ = () => {

    /* 
        1. 컴포넌트가 마운트 된 이후 한번만 id태그에 포커스를 줍니다.

        2. id, pw는 state로 관리합니다. (변화되는 값이므로)
           로그인 버튼 클릭시 공백이라면 공백인 태그에 포커스를 주세요.
           로그인 버튼 클릭시 공백이 아니라면 경고창으로 id와 pw를 출력해주세요
    */

    const [data, setData] = useState({id: '', pw: ''});

    const inputId = useRef(null);
    const inputPw = useRef(null);

    useEffect( () => {
        // console.log("id 포커스");
        inputId.current.focus();
    }, [] ) //[] 처음 한번만 실행

    //input 태그의 핸들링 - id 혹은 pw가 체인지 될때마다 setData로 data에 저장
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    //버튼에서 이벤트 핸들링하는데 다른 태그의 데이터를 사용해야 할 때 useRef 사용
    const handleClick = () => {
        // console.log(inputId.current);
        // console.log(inputPw.current);

        if(inputId.current.value === '') {
            inputId.current.focus(); //id태그
        } else if(inputPw.current.value === '') {
            inputPw.current.focus(); //pw태그
        } else {
            alert(`아이디는 ${data.id}이고, 비밀번호는 ${data.pw}입니다.`);
            setData({["id"]: '', ['pw']: ''}); //input에 value 값 넣는것 빼먹지 말자.....
        }
    }

    return (
        <div>
            <h3>hook 실습</h3>
            <input type="text" name="id" placeholder="아이디" ref={inputId} onChange={handleChange} value={data.id}/>
            <input type="password" name="pw" placeholder="비밀번호" ref={inputPw} onChange={handleChange} value={data.pw}/>
            <button onClick={handleClick}>로그인</button>
        </div>
    )
}

export default HookQ;