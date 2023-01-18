

const IterationComponent = () => {
    
    //1. 반복처리
    const arr = [1,2,3,4,5];
    
    // const newArr = arr.map(function (item, index, arr) {
    //     return item * 10;
    // })
    /* 
        const newArr = arr.map((item, index, arr) => item * 10); //위와 같은 표현
        console.log(newArr); //[10, 20, 30, 40, 50] 나옴
    */


    //2. 반복처리 (태그) 
    //li를 차곡차곡 쌓는데 item 값을 넣음 = item 값을 화면에 뿌려줌
    //리액트에서 반복 처리시에 key를 태그에 작성합니다. (key는 고유한 값입니다)
    //key는 화면에서 렌더링할 때 변화를 감지하기 위해 참조하는 값입니다.
    //key는 화면에 나타나지는 않지만 꼭 사용해야 함. 태그에 던지는 props의 개념임
    const newArr = arr.map( (item, index) => <li key={index}>{item}</li> ); //li를 차곡차곡 쌓는데 item 값을 넣음
    console.log(newArr); //이걸 화면에 뿌려줌

    return(
        <>
            <ul>
                {newArr}
            </ul>
        </>
    )
}

export default IterationComponent;