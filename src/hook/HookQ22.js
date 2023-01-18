import { useRef, useState, useEffect } from "react";


const HookQ22 = () => {

    /*
    실습(할일목록 만들기)
    1. state는 {todo: '', list; []}로 관리하세요
    2. 할일 목록을 작성하고 클릭 시, list에 인풋에 입력값을 추가하고 map을 통해서 화면을 그립니다.
    3. 등록버튼 클릭 이후에는 ref를 활용해서 input태그에 포커싱을 줍니다.
    */


    const todoTag = useRef();

    const [todoData, setTodoData] = useState({ todo: '', list: [] }); // 맨 처음에 초기값 세팅
    let newList = todoData.list.map((item, index) => <li key={index}>{item}</li>); // 배열에다가 li태그 붙여서 반환하고, 이 데이터를 화면에 뿌릴 것
    
    const handleTodoInput = (e) => { 
        setTodoData({ ...todoData, todo: e.target.value }); // 인풋값을 todo에 저장해둠
    }
    
    const todoRegister = () => { // 클릭이벤트
        if (todoTag.current.value === "") { // 값을 입력하지 않으면 실행하지 않도록 함
            todoTag.current.focus(); // 다만, 포커스를 줘서 바로 입력할 수 있게 해둠
            return;
        }
        let newArr = todoData.list.concat(todoData.todo); // todo에 저장한 input값을 list에 담아 newArr로 반환받는다
        setTodoData({ ...todoData, todo: '', list: newArr }); // 원래 todoData를 복사해오고, todo를 공백으로 바꾼다. 이미 list에 담았기 때문이다. 그리고 list에는 반환받은 newArr를 담는다.
        // 그 후 17줄로 돌아감. IterationComponent2와 동일한 원리
        todoTag.current.focus(); 
    }

    return (
        <>
            <hr />
            <h3>ref로 할일목록 만들기</h3>
            <input type="text" name="todo" placeholder="할일목록" ref={todoTag} onChange={handleTodoInput} value={todoData.todo} />
            <button onClick={todoRegister}>등록하기</button>
            <ul>
                {newList}
            </ul>
        </>
    )


}

export default HookQ22;