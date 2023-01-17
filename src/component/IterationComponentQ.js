

/* 
    이미지를 가져오는 방법
    1. 외부 서버에서 경로를 참조 받음 (가장 일반적인 방법)

    2. src 폴더 밑에 img파일 참고 가능 (선호x)
       import img1 from '../img/img4.png';

    3. public 폴더 밑에 넣는 경우 이미지를 바로 참조 가능 (강사님 추천) - 간단
*/

import { useState } from "react";


const IterationComponentQ = () => {

    //1. 반복할 데이터 (state로 관리)
    const arr = [
        {src : '/img/img1.png', title : '아이폰10', price: 1000}, //이거 한줄이 item
        {src : '/img/img2.png', title : '아이폰11', price: 2000},
        {src : '/img/img3.png', title : '아이폰12', price: 3000},
        {src : '/img/img4.png', title : '아이폰13', price: 4000},
    ]
    
    const [list, setList] = useState(arr); //useState로 arr 가져와서 list, setList

    //2. map 함수를 이용해서 div 태그 생성
    const newList = list.map ( (item, index)=>
                                    <div key={index} onClick={ () => { //실행시킬 익명함수 안에서 return으로 handleClick 호출
                                        return handleClick(item.src);
                                    }}>
                                        <img src={item.src}  alt={item.title} width="100"/>
                                        <p>제품: {item.title}</p>
                                        <p>가격: {item.price}</p>
                                    </div> );

    //3. 사진 클릭시 사진을 크게 보여주기
    const [data, setData] = useState('');
    const handleClick = (e) => {
        const img = <img src={e} alt="제목" width="250"/> //이렇게 변수로 해 주면 alt 넣어도 안나옴!
        setData(img);
    }


    return (
        <>
            <h3>이미지 데이터를 반복하기</h3>
            {data}

            {/* 
                <img src="https://raw.githubusercontent.com/yopy0817/data_example/master/img/img1.png" alt="제목" width="100"/>
                <img src={img1} alt="제목" width="100" />
                <img src="/img/img1.png" alt="제목" width="100" />
            */}

            <div style={{display: "flex", justifyContent: "space-around"}}>
                {/* 반복할 요소의 모형 */}
                {/*
                    <div>
                        <img src="/img/img1.png" alt="제목" width="100"/>
                        <p>제목</p>
                        <p>가격</p>
                    </div>
                */}
                    {newList}
            </div>
        </>
    )
}





//강사님 답

// const IterationComponentQ = () => {

    
//     const arr = [
//         {src : '/img/img1.png', title : '아이폰10', price: 1000}, //이거 한줄이 item
//         {src : '/img/img2.png', title : '아이폰11', price: 2000},
//         {src : '/img/img3.png', title : '아이폰12', price: 3000},
//         {src : '/img/img4.png', title : '아이폰13', price: 4000},
//     ]
    
//     //1. state로 arr을 관리
//     const [data, setData] = useState(arr);

//     //2. 반복처리
//     const newArr = data.map ( item =>
//                                     <div key={item.src}>
//                                         <img src={item.src}  alt={item.title} width="100" onClick={()=>handleContent(item.src)}/>
//                                         <p>제품: {item.title}</p>
//                                         <p>가격: {item.price}</p>
//                                     </div> );

//     //3. 클릭시에 화면에 그려질 내용을 state로 관리
//     const [content, setContent] = useState({src:'/img/img1.png'});

//     const handleContent = (a) => {
//         setContent({src: a});
//     }

//     return (
//         <>
//             <h3>이미지 데이터를 반복하기</h3>

//             <div>
//                 <img src={content.src} width="200"/> {/* content를 객체로 만들어서 거기에 src를 변경해주는거라서 사용할때 content.src라고 해야함 */}
//             </div>

//             <div style={{display: "flex", justifyContent: "space-around"}}>
//                     {newArr}
//             </div>
//         </>
//     )
// }




export default IterationComponentQ;