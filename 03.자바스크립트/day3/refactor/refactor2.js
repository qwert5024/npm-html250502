const getNewsList = () => {
const requestOptions = {
  method: "GET", //HTTP메소드 GET으로 설정함
  redirect: "follow" //서버가 리다이렉트(응답URL)를 반환할 때 자동으로 따라가기
};
  //Retch API호출
  //브라우저가 제공하는 내장 API다.(Axios-npm- 비동기통신 지원하는 라이브러리)
  //프레임워크와 라이브러리 차이점은 제어권을 가지고 있다|가지고 있지 않다.
  //네트워크 요청을 보내고(watting- 비동기로 처리해야함.)
  //응답이 언제 올지 알 수가 없다. 그러니까 비동기로 해야 한다.
  //기다리는 동안 다른 일을 할 수 있다. - 합리적인 판단
  //단 약속해줄 께 -> new Promise<Response>반환
  //응답으로 받아오는 객체는 json포맷으로 돌려준다.
  //그래서 나는 XMLHttpRequest대신에 fetch를 사용하기로 결정하였다.
  //JSON.parse나 JSON.stringify를 쓰지 않고도 직접 json으로 받아낸다.
  //리액트 프로젝트에서는 axios를 사용할 것이다.
  fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
      const newsFeed = result;
      const ul = document.createElement("ul")
      for (let i=0;i<10;i=i+1){
        const li = document.createElement("li")
        ul.appendChild(li)
      }//end of for
      document.querySelector(".home").appendChild(ul)
    .catch((error) => console.error(error));
}//end of getNewsList

/*
전체 흐름 요약
Fetch요청 : fetch(,)
-> 응답(JSON)파싱 -> response.json()지원함
-> DOM요소 생성 및 데이터 바인딩 -> createElement, appendChild -> 직관없음
-> 페이지 삽입 : innerHTML, innerText -> 보안 취약함.
-> 에러 처리 : console.error (error메시지 확인한다음 처리)
*/