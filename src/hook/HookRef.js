import { useState, useRef } from "react";


const HookRef = () => {
    //사용자 입력값 data, 화면에 출력값 result
    const [form, setForm] = useState({data: '', result: ''});

    //input 태그에 값입력시 체인지 이벤트
    const handleChange = (e) => {
        setForm({...form, ["data"]: e.target.value});
    }
    console.log(form);

    //등록, 버튼 클릭시 등록 이벤트
    const handleClick = () => {
        setForm( {data: '', result: form.data} ); //data는 인풋에 적힌 것을 지우고, result에다가는 바꾼 데이터 값 넣음
    
        //Ref의 사용
        console.log(inputTag); //{current: input} 나옴
        console.log(inputTag.current); //tag그 자체
        console.log(inputTag.current.value); //tag안의 value

        inputTag.current.focus();
    }

    //특정 태그에 이름달기 uesRef()
    //반환된 이름을 사용할 태그에 ref 속성에 넣습니다.
    //1. useRef()를 사용하여 하나의 변수로 이름을 지정해주고 
    //2. 만든useRef태그를 태그에 ref={}안에 넣어주면 된다.
    const inputTag = useRef();
    console.log(inputTag);

    return (
        <>
            내용: <input type="text" onChange={handleChange} value={form.data} ref={inputTag}/>
            <button onClick={handleClick}>등록하기</button>
            <br/>
            결과: {form.result}
        </>
    )
}


export default HookRef;