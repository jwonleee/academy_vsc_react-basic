import { useState } from "react";


/* 
    //5. 삭제기능
    //화살표 함수는 익명함수 대체하는 거여서 당겨쓰기인 호이스팅이 되지 않음
    //그래서 위에서 함수가 정의되어 있고, 아래 (2)번에서 호출이 되야함
    const handleRemove = () => { //list를 더블클릭 했을 떄
        console.log(1); }
*/

const IterationComponent2 = () => {

    //1. 반복할 데이터 (state로 관리)
    const arr = [ //배열 안에 객체 3개 생성
        {id: 1, topic: 'hello'},
        {id: 2, topic: 'bye'},
        {id: 3, topic: 'see you'}
    ];

    const [list, setList] = useState(arr); //useState로 arr 가져와서 list, setList

    //2. map 함수를 이용해서 li태그로 생성
    const newList = list.map( item => 
                        //console.log(item); //찍어보면 arr의 값이 하나씩 나옴
                        <li key={item.id} onDoubleClick={ () => { //호이스팅을 할 수 없으니 실행시킬 익명함수 안에서 return으로 handleRemove !!!호출!!! (전달 아님)
                            return handleRemove(item.id); //이렇게 실행시키면 함수의 매개변수를 줄 수 있게 됨
                        } }>
                            {item.topic}
                        </li> 
                    ); //한줄로 적어주기

    //3. input 데이터 관리
    const [data, setData] = useState(''); //input데이터를 관리할 state
    const handleChange = (e) => {
        setData(e.target.value);
    };

    //4. 추가하기 버튼 클릭시 input의 값을 list의 마지막에 추가
    const handleClick = (e) => {
        let obj = {id: list[list.length-1].id+1, topic: data}; /* 객체를 만들고 마지막에 추가, list[list.length-1] 리스트의 마지막 요소-1해야 마지막 데이터 나옴-주석 다시 */ 
        // list.push(obj); 이렇게 하면 안됨, list데이터를 직접적으로 손댄거와 같음
        let newArr = list.concat(obj); //concat은 배열요소를 합쳐줌, 원본리스트를 수정하지는 x, 기본 list에 obj가 합쳐진 새로운 리스트 반환
        setList(newArr); //state 변경
        setData(''); //input값 초기화
    };

    //5. 삭제기능
    //화살표 함수는 익명함수기 때문에 호이스팅 불가
    //이벤트 안에서 함수를 호출로 연결하는 방법
    //onClick={ () => 함수() }
    const handleRemove = (a) => {
        console.log(a); //키 = id 나옴
        //id가 필요함 - id 가져와서 지워야하기 때문
        
        //filter - 콜백의 리턴이 true인 값을 가지고 새로운 배열생성
        // const ex = [1,2,3,4,5].filter = ( (item) => item != 3);
        const newList = list.filter( item => item.id !== a );
        setList(newList);
    }    

    return (
        <>
            <h3>목록 추가하기</h3>
            <input type="text" onChange={handleChange} value={data}/> {/* state로 관리될 data 찍어주기 */}
            <button type="button" onClick={handleClick}>추가하기</button>{/* 추가하면 state에 넣어주고 바뀌는걸 감지해서 화면을 다시 그려줌 */}
            <ul>
                {newList} {/* 반복해서 처리한 컴포넌트를 newList 변수에 저장해서 화면에 뿌려줌 */}
            </ul>
        </>
    )

}

export default IterationComponent2;