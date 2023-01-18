import { Fragment } from "react";

//css파일 경로 링크
import './css/App.css';

//css모듈 파일 링크
//module export로 객체로 나가는게 아니라 {} 중괄호 뺌
import styled from './css/App.module.css';

const App = () => {

    //p.261 - css 스타일링

    //직접 스타일링하기: -은 카멜표기법으로 변경됩니다.
    const myStyle = {
        color: "#fff",
        textAlign: "center"
    }

    return (
        <Fragment>
            <header style={{backgroundColor: "blue"}} className="app_header">
                <p style={myStyle}>헤더입니다(직접 스타일링)</p>
            </header>

            <article className="app_article">
                css파일로 디자인하기
            </article>

            <section className={styled.app_wrap}>
                <div className={styled.app_item}>
                    <p>CSS 디자인</p>
                    {/* 전역선택자 */}
                    <input type="text" className="input_control"/>
                    <input type="password" className="input_control"/>
                </div>
            </section>
        </Fragment>
    )
}

export default App;