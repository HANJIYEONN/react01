/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  
  let post = '강남 우동 맛집';
  // {} 데이터 넣기 = 데이터 바인딩
  let [ 글제목,  set글제목 ] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [ 좋아용, set좋아용 ] = useState(0);

  let [modal, setModal] = useState(true); 

  // [] destructuring 문법
  // useState 는 html과 다르게 재렌더링이 됨
  const [logo, setLogo] = useState('blog')

  [1,2,3].map(function(e){
    console.log(e)
  })


  function 함수(){
    console.log("!!")
    set좋아용(좋아용+1);
  }

  function changeName(){
    let copyName = [...글제목];
    copyName[0] = '여자 코트 추천'
    set글제목(copyName);
  }




  /* 
  => [글제목]은 안되고 [...글제목]은 된 이유
    [state 변경 함수 특징]
    - 기존 state == 신규 state의 경우 변경 안해줌(자원 절약)
    [array / object 특징]
    - array / object 담은 변수엔 화살표만 저장됨(REM에 저장)
  => 글제목이 변동되지 않았다고 착각해서 재랜더링 안해줌=> 변경 안됨
  => ...의 뜻 : 괄호 벗겨주세요 : 글제목이 복사되어 다른 장소의 REM 에 저장됨
   ... : spread operator
   */

  function sortingName (){
    let copyName = [...글제목];
    let copyNameSort = copyName.sort();
    set글제목(copyNameSort);
  }

  const openModal = () => {
    if(modal) setModal(false);
    if(!modal) setModal(true);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'red', fontSize : '16px'}}>{logo}</h4>
      </div>
      {/* <div className="list">
        <h4>{ 글제목[0] } <span  onClick = { 함수 }>👍</span> { 좋아용 } </h4>
        <p>2월 17일 발행</p>

        <h4>{ 글제목[1] }</h4>
        <span onClick = {changeName} >╰(*°▽°*)╯</span>
        <p>2월 17일 발행</p>
        <h4 onClick={openModal}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
        <button onClick={ sortingName }>정렬</button>
      </div> */}

      {
        글제목.map(function(e, i){
          return (
            <div className="list" key={i}>
              {/* <h4>{ 글제목[i] }</h4> */}
              <h4 >{ e } <span  onClick = { 함수 }>👍</span> { 좋아용 } </h4>
              <span onClick = {changeName} >╰(*°▽°*)╯</span>
              <p>2월 17일 발행</p>
            </div>
          )
        }  )
      }

      <button onClick={ sortingName }>정렬</button>

      {
        (modal) ? <Modal /> : null 
      }

    </div>
  );
}


  /*
    [컴포넌트 만드는 법]
      1. function 만들기
      2. return ()안에 html 담기
      3. <함수명><함수명/> 쓰기
  */

  /* 
    [어떤걸 컴포넌트로 만들면 좋은가]
      1.반복적인 html 축약할 때
      2. 큰 페이지들
      3. 자주 변경되는 것들
  */

  /*
    [동적으로 UI만드는  STEP]
      1. HTML CSS로 미리 디자인 완성
      2. UI 의 현재 상태를 STATE로 저장
      3. STATE레 따라 UI가 어떻게 보일지 작성 (조건문 등으로)
  */

  function Modal() {

    return (
      <>
        <div className="modal">
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세내용</p>
      </div>
      </>
    )
  }
    
  /*
    [map() 함수]
    1. 왼쪽 array 자료만큼 내부코드 실행해줌
    2. return 오른쪽에 있는 걸 array에 담아줌
    3. 유용한 파라미터 2개 사용가능
  */

export default App;
