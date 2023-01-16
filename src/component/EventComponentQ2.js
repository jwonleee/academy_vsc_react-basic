import { useState } from "react";

//내 답
// const EventComponentQ2 = () => {

//     const [data, setData] = useState('');
//     const handleChange = (e) => {
//         console.log(e.target.value); //사람이 적은 값
//         setData(e.target.value);
//     }
    
//     const [change, setChange] = useState('');
//     const handleAdd = (e) => {
//         console.log(e.target); //button나옴
//         const copy = [...data, e.target.value];
//         setChange(copy);
//         setData('');
//     }

//     return(
//         <>
//         <hr/>
//         <h3>인풋데이터 핸들링 (실습)</h3>
//         <p>클릭시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리</p>
//         <p>힌트는? 아마도 state 두 개가 필요할 듯?</p>

//         <input type="text" name="name" onChange={handleChange} value={data}/> {/* state는 공백인데, value값이 없으면 그게 화면에 나타나지 않음 */}
//         <button onClick={handleAdd}>추가하기</button>

//         <h3>결과</h3>
//         <h4>{change}</h4>
//         </>
//     )
// }
// export default EventComponentQ2;


//강사님 답 1st
// const EventComponentQ2 = () => {

//     const [data, setData] = useState(''); //인풋데이터
//     const [result, setResult] = useState(''); //결과데이터

//     const handleChange = (e) => {
//         setData(e.target.value); //사용자가 입력한 값 data에 저장, 비동기적으로 변경(늦게 나오는게 정상)
//         //console.log(data); //이전 값이 출력됩니다.
//     }
    
//     const handleClick = (e) => {
//         setResult(data); //사용자가 입력한 값으로 변경
//         setData(''); //인풋데이터는 공백으로 변경
//     }

//     return(
//         <>
//         <hr/>
//         <h3>인풋데이터 핸들링 (실습)</h3>
//         <p>클릭시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리</p>
//         <p>힌트는? 아마도 state 두 개가 필요할 듯?</p>

//         <input type="text" name="name" onChange={handleChange} value={data}/> {/* 핸들링 되는 data(input값) 표현해줘야 함 */}
//         <button onClick={handleClick}>추가하기</button>

//         <h3>결과</h3>
//         <h4>{result}</h4>
//         </>
//     )
// }
// export default EventComponentQ2;


//강사님 답 2nd
const EventComponentQ2 = () => {

    //state를 객체로 관리
    const [form, setForm] = useState({data: '', result: ''});

    const handleChange = (e) => {
        //data는 사용자의 입력값으로, result는 유지(form.result로 그대로 가져오기)
        setForm({data: e.target.value, result: form.result});
    }
    
    const handleClick = (e) => {
        //data는 '', result는 data로 변경
        setForm({data: '', result: form.data});
    }

    return(
        <>
        <hr/>
        <h3>인풋데이터 핸들링 (실습)</h3>
        <p>클릭시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리</p>
        <p>힌트는? 아마도 state 두 개가 필요할 듯?</p>

        <input type="text" name="name" onChange={handleChange} value={form.data}/>
        <button onClick={handleClick}>추가하기</button>

        <h3>결과</h3>
        <h4>{form.result}</h4> {/* 처음에는 공백이지만 나중에는 바뀔 값 */}
        </>
    )
}
export default EventComponentQ2;