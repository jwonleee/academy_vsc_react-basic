import { useState } from "react";


const IterationComponentQ2 = () => {
    //1 - select는 컴포넌트 반복으로 option태그를 생성 (state필요x)
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];
    
    //2 - data는 state로 관리하고 화면에 li태그로 반복함 (고정값)
    const data = [
        {id: 1, type: 'Java', teacher: '이순신'},
        {id: 2, type: 'Java', teacher: '홍길자'},
        {id: 3, type: 'Javascript', teacher: '홍길동'},
        {id: 4, type: 'Oracle', teacher: '이순신'},
        {id: 5, type: 'Mysql', teacher: '이순신'},
        {id: 6, type: 'CSS', teacher: '박찬호'},
        {id: 7, type: 'HTML', teacher: 'coding404'},
    ];

    // onChange={ () => { 이벤트를 어디에다 걸어줘야 하는가 - select 태그에 바로 걸어주면 됨
    //     return handleChange(item.id);
    // } }

    const option = select.map ( item =>
                <option key={item}>{item}</option> //key에 객체가 아니니까 자기자신을 넣어줌
        );

    //3 - 셀렉트 박스가 체인지되면, 이벤트객체를 활용해서 선택된 값만 필터링해서 보여주면 됨 (변화되는 값)
    const [list, setList] = useState(data);
    const newList = list.map ( item => 
                <li key={item.id}> {item.type} - {item.teacher} </li>
    );
    
    //handleChange 함수
    const handleChange = (e) => {
        console.log(e.target.value); //e.target = select, e.target.value = option 값
        const newArr = data.filter(item => item.type === e.target.value); //필터를 걸어주는데 list로 걸면 list가 바뀌면서 덮어져서 사라지고, data로 걸면 기존 데이터에서만 필터가 걸림
        setList(newArr);
    };

    //4 - 숙제: 검색 기능 만들기 - 대소문자 가리지 않고, 일부만 검색해도 나옴
    //input 값을 관리하기 위한 state
    const [search, setSearch] = useState(data);
    const handleSarch = (e) => {
        console.log(e.target.value); //사용자가 입력한 값
        setSearch(e.target.value);
    }
    
    const handleClick = () => {
        const newSearch = data.filter( item => item.type.toLocaleLowerCase().toLocaleUpperCase().includes(search) || item.teacher.includes(search) );
        // console.log(newSearch);
        setList(newSearch);
    }

    return (
        <>
            <h3>컴포넌트 반복 실습</h3>
            <h3>검색기능 - 대소문자를 구분하지 않고, teacher, type에 포함된 데이터만 검색</h3>
                
                Search:
                <input type="text" onChange={handleSarch}/>
                <button type="button" onClick={handleClick}>검색</button>
                <br/>
                
                과목찾기:
                <select onChange={handleChange}>
                    {option}
                </select>
                <ul>
                    {newList}
                </ul>
        </>
    )

}



//강사님 답
// const IterationComponentQ2 = () => {
//     //1 - select는 컴포넌트 반복으로 option태그를 생성 (state필요x, 고정값)
//     const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];
//     const newSelect = select.map( (item, index) => <option key={index}>{item}</option> );
    
//     //2 - data는 state로 관리하고 화면에 li태그로 반복함 (변화되는 값)
//     const data = [
//         {id: 1, type: 'Java', teacher: '이순신'},
//         {id: 2, type: 'Java', teacher: '홍길자'},
//         {id: 3, type: 'Javascript', teacher: '홍길동'},
//         {id: 4, type: 'Oracle', teacher: '이순신'},
//         {id: 5, type: 'Mysql', teacher: '이순신'},
//         {id: 6, type: 'CSS', teacher: '박찬호'},
//         {id: 7, type: 'HTML', teacher: 'coding404'},
//     ];

//     const [list, setList] = useState(data);
//     const newList = list.map ( item => <li key={item.id}>{item.type} - {item.teacher}</li> );

//     //3 - 셀렉트 박스가 체인지되면, 이벤트객체를 활용해서 선택된 값만 필터링해서 보여주면 됨
//     const handleChange = (e) => {
//         console.log(e.target.value); //선택한 과목 나옴
//         let newList = data.filter( item => item.type === e.target.value ); //지역변수로 담아줌(굳이)
//         console.log(list); //콘솔로 찍어서 왜 사라지는지 확인
//         //첫번째는 데이터가 다 나오는데 두번째부터는 이전 state가 change되었기 떄문에 안나옴 ▶ 원본인 data에서 필터를 걸어줘야 함
//         setList(newList);
//     }

//     return (
//         <>
//             <h3>컴포넌트 반복 실습</h3>
//                 과목찾기 :
//                 <select onChange={handleChange}>
//                     {newSelect}
//                 </select>
//                 <ul>
//                     {newList}
//                 </ul>
//         </>
//     )

// }


export default IterationComponentQ2