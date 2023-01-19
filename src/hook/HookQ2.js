import { useRef, useState } from "react";



// const HookQ2 = () => {

//     /* 
//         실습(할 일 목록 만들기)
//         1. state는 { todo: '', list: [] }로 관리하세요 - 객체로 하나로 묶어서 관리해라
//         2. 할 일 목록을 작성하고 클릭시, list에 input에 입력값을 추가하고 map을 통해서 화면을 그립니다.
//         3. 등록된 이후에는 ref를 활용해서 input 태그에 포커싱을 줍니다.
//     */

//     const [data, setData] = useState({todo: '', list: []});

    
//     const handleChange = (e) => {
//         setData({...data, ['todo']:e.target.value});
//         console.log(data.todo);
//     }
    

//     //map함수를 이용해서 li태그 생성 - map은 반복요소에서 사용(data.list.map)
//     const newList = data.list.map( (item, index) => 
//             <li key={index}>{item.todo}</li>
//         );

//     const inputTag = useRef(''); //ref

//     const handleClick = () => {
//         if(inputTag.current.value === '') {
//             inputTag.current.focus();
//             return;
//         }

//         let obj = {todo: data.todo, list:[data.todo]};
//         let newArr = data.list.concat(obj);

//         setData({...data, ['todo']: '', ['list']: newArr});

//         inputTag.current.focus();
//     }
    
//     return (
//         <div>
//             <h3>ref로 할 일 목록 만들기</h3>
//             <input type="text" name="todo" placeholder="할 일 목록" ref={inputTag} value={data.todo} onChange={handleChange}/>
//             <button onClick={handleClick}>등록하기</button>

//             <ul>
//                 {/* 화면을 반복처리... */}
//                 {newList}
//             </ul>
//         </div>
//     )
// }

// export default HookQ2;




//강사님 답
const HookQ2 = () => {

    /* 
        실습(할 일 목록 만들기)
        1. state는 { todo: '', list: [] }로 관리하세요 - 객체로 하나로 묶어서 관리해라
        2. 할 일 목록을 작성하고 클릭시, list에 input에 입력값을 추가하고 map을 통해서 화면을 그립니다.
        3. 등록된 이후에는 ref를 활용해서 input 태그에 포커싱을 줍니다.
    */

    const inputRef = useRef(null); //input태그
    const [data, setData] = useState({todo: '', list: []});


    
    //인풋데이터 핸들링
    const handleChange = (e) => {
        setData({...data, ["todo"]: e.target.value});
    }
    console.log(data); //사용자가 입력한 값
    
    
    //추가하기
    const handleClick = () => {
        const newList = data.list.concat( data.todo ); //기존 list는 유지, 새롭게 합쳐진 list를 반환
        console.log(newList);
        setData({todo: '', list: newList}); //list키는 newList로 todo는 공백으로, 객체를 통쨰로 갈아끼움
        
        inputRef.current.focus(); //등록한 다음 포커싱 맞추기
    }
    
    
    //화면 그림 - 반복요소에는 반드시 key값이 존재해야 함
    const newArr = data.list.map((item, index)=> <li key={index}>{index+1}. {item}</li>)

    return (
        <div>
            <h3>ref로 할 일 목록 만들기</h3>
            <input type="text" name="todo" placeholder="할 일 목록" onChange={handleChange} value={data.todo} ref={inputRef}/>
            <button onClick={handleClick}>등록하기</button>

            <ul>
                화면을 반복처리
                {newArr}
            </ul>
        </div>
    )
}

export default HookQ2;