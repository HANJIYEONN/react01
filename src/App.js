/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
//
  
  let post = '강남 우동 맛집';
  // {} 데이터 넣기 = 데이터 바인딩
  const [ 글제목, b ] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [ 좋아용, set좋아용 ] = useState(0);

  // [] destructuring 문법
  // useState 는 html과 다르게 재렌더링이 됨
  const [logo, setLogo] = useState('blog')

  function 함수(){
    set좋아용(좋아용+1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'red', fontSize : '16px'}}>{logo}</h4>
      </div>
      <div className="list">
        <h4>{ 글제목[0] }<span  onClick = { 함수 }>👍</span> { 좋아용 } </h4>
        <p>2월 17일 발행</p>

        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <h4> { post }</h4>

    </div>
  );
}

export default App;
