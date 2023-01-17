import { useEffect, useState } from "react";


const HookEffect = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleAge = (e) => {
        setAge(e.target.value);
    }

    //useEffect(함수) - 화면이 mount된 이후에 동작됩니다.
    /* 1.
        useEffect( () => { //화면 실행이후 실행됨 => 111 실행되고 실행, state를 바꿔주면 화면 실행된 이후에 동작함
            console.log(`렌더링완료. state값 ${name}`);
        } )
        console.log(111);
    */

    //useEffect(함수, []) - 화면이 첫번째 mount에서만 실행됩니다.
    /* 2.
        useEffect( () => {
            console.log(`처음만 실행됩니다`);
        }, [] )
    */

    //useEffect(함수, [state]) - 특정값이 렌더링 될때만 실행됩니다, state는 위의 name, age
    // 3. 첫번째 mount가 실행될 때 한번은 실행
    useEffect( () => {
        console.log(`age or name이 변경될 때마다 실행됩니다`);
    }, [age, name]);
    //1번은 모든게 변경될 때이고, 이거 3번은 선택적으로 정해줄 수 있음

    return(
        <>
            이름: <input type="text" onChange={handleName}/><br/>
            나이: <input type="number" onChange={handleAge}/><br/>

            이름: {name}, 나이: {age}
        </>
    )
}

export default HookEffect;