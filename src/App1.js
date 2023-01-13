import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {

  const name = "홍길동"; //변수
  const age = 20;

  const myStyle = {color: 'red', backgroundColor: 'beige', fontSize: 15};


  return ( //JSX 문법
    <Fragment>
      <ul>
        <li>1. 주석 alt + shift + a {/* 주석입니다, 반드시 중괄호를 달아야 한다는 아님 */}</li>
        <li>2. return 구문은 반드시 1개이어야 합니다. 반드시 하나의 태그를 리턴해야 합니다.</li>
        <li>3. div를 사용(하나의 태그로 묶으면 사용가능)하고 싶지 않으면 Fragment 컴포넌트를 사용합니다.</li>
        <li>4. 함수 안에서 변수를 만들고 사용하고 싶으면 {name}를 사용합니다.</li>
        <li>5. if문 대신에 3항 연산자를 사용합니다.</li>
        <li>6. 화면에 그리고 싶은 내용이 없다면 null을 반환합니다.</li>
        <li>7. undefined를 반환하는 상황을 만들면 안됩니다. ▶ 초기화가 안 된 경우</li>
        <li>8. DOM에 직접 스타일을 하고 싶은 경우는 객체로 묶고 속성을 카멜표기법으로 사용합니다. (단위 생략시 px)</li>
        <li>9. class 속성 대신에 className을 사용합니다.</li>
        <li>10. 홀로 사용하는 태그는 반드시 닫는 태그를 작성해야 합니다. (예: {/* <input /> <br /> */})</li>
      </ul>

      <div className='App' style={myStyle}> {/* 첫번째 {} JSX문법 사용할거야, 두번쨰 {} 객체야 */}
        안녕하세요<br/>
        {name === '홍길동'? '홍길동입니다' : '홍길동이 아닙니다'}
        {name === '이순신'? <h3>이순신입니다</h3> : <h3>이순신이 아닙니다</h3>}
        {age === 30? <h3>20입니다</h3> : null} {/* 화면에 나타나는게 없음 */}
      </div>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          안녕하세요?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
    </Fragment>
    

  );
}

export default App;
