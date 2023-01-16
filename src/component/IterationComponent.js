

const IterationComponent = () => {
    
    //반복처리
    const arr = [1,2,3,4,5];
    
    // const newArr = arr.map(function (item, index, arr) {
    //     return item * 10;
    // })
    
    const newArr = arr.map((item, index, arr) => item * 10); //위와 같은 표현
    console.log(newArr); //[10, 20, 30, 40, 50] 나옴

    //2. 

    
    return(
        <>
        </>
    )
}

export default IterationComponent;