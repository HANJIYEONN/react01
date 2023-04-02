/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  
  let post = '강남 우동 맛집';
  // {} 데이터 넣기 = 데이터 바인딩
  let [ 글제목,  set글제목 ] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [ 좋아용, set좋아용 ] = useState([0,0,0]);

  let [modal, setModal] = useState(false); 
  let [modalTitle, setModalTitle] = useState(0);
  let [입력값, set입력값] = useState('');

  // [] destructuring 문법
  // useState 는 html과 다르게 재렌더링이 됨
  const [logo, setLogo] = useState('blog')

  function 함수(i){
    let copyName = [...좋아용]
    copyName[i] = copyName[i]+1;
    set좋아용(copyName);
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

  const openModal = (e) => {
    if(modal) setModal(false);
    if(!modal) setModal(true);

    setModalTitle(e); 
  }

  function 게시글추가(){
    if(!입력값) {
      alert("입력값이 존제하지 않습니다.")
       return false;
    }
    let copyName = [...글제목, 입력값];
    set글제목(copyName);
  }

function 삭제(i){
  let copyName = [...글제목];
  copyName.splice(i,1)
  set글제목(copyName)
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
              <h4 onClick={()=>{openModal(e)}}>{ e } <span  onClick = { (e) => {e.stopPropagation(); 함수(i)} }>👍</span> { 좋아용[i] } </h4>
              <span onClick = {changeName} >╰(*°▽°*)╯</span>
              <button onClick={()=>{삭제(i)}}>삭제</button>
              <p>2월 17일 발행</p>
            </div>
          )
        }  )
      }

      <input type="text" onChange={(e)=>{set입력값(e.target.value)} }></input>
      <button onClick={()=> {게시글추가()}}>추가</button>

      <button onClick={ sortingName }>정렬</button>

      {
        (modal) ? <Modal color={'skyblue'} 글제목={ 글제목 } set글제목={set글제목} modalTitle={modalTitle}/> : null 
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

    //이벤트버블링
    // 상위 html로 퍼지는 이벤트버블링을 막고 싶으면 e.stopPropagation() 

  function Modal(props)
   {

    return (
      <>
        <div className="modal" style={{background : props.color}}>
          <h4>{props.modalTitle}</h4>
          <p>날짜</p>
          <p>상세내용</p>
          <button onClick={()=>{props.set글제목(['여자코트변경', '강남우동맛집','파이썬 독학'])} }>글 수정</button>
      </div>
      </>
    )
  }

  /*
    [ 부모 ->  자식 state 전송하는 법]
      1. <자식컴포넌트 작명 ={state이름}>
      2. props 파라미터 등록후 props.작명 사용
  */
    
  /*
    [map() 함수]
    1. 왼쪽 array 자료만큼 내부코드 실행해줌
    2. return 오른쪽에 있는 걸 array에 담아줌
    3. 유용한 파라미터 2개 사용가능
  */

  //class 문법
  class Modal2 extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        name : 'kim',
        age : 16
      }
    }
    render(){
      return (
        <div>안녕 {this.state.name }
          <button onClick={()=> {
            this.setState({ age:20 })
          }}>버튼</button> 
        
        </div>
      )
    }
  } 

export default App;
