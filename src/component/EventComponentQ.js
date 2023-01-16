import { useState } from "react";


const EventComponentQ = () => {

    const [menu, setMenu] = useState('메뉴를 선택하세요');

    const handleChange = (e) => { //첫번째 매개변수는 event객체를 받겠다
        if(e.target.value === '선택') { //선택을 누르면 아무것도 안 나오게 조건문
            setMenu('메뉴를 선택하세요');
        } else {
            setMenu(e.target.value);
        }
    }

    return(
        <>
        <hr/>
        <h3>셀렉트 태그 핸들링 (실습)</h3>
        <p>셀렉트 태그가 체인지될 때 선택한 결과를 아래에 출력</p>
        
        <select onChange={handleChange}> {/* select 태그는 옵션이 value */}
            <option>선택</option>
            <option>햄버거</option>
            <option>피자</option>
            <option>치킨</option>
        </select>

        <h3>선택한 결과</h3>
        <h4>{menu}</h4>
        </>
    )

}

export default EventComponentQ;