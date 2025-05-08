//브라우저에 내장된 표준 비동기통신객체 생성하기
//const - 상수선언 할 때 - ECMAScript6(2015)
//let - 변수 선언 할 때
//XMLHttpRequest는 객채 이름으로 new다음에 작성하면 객체생성됨.
const xhr = new XMLHttpRequest()
//상수라서 대문자로 표시함. - 눈에 잘 띄게 했다.
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
//xhr은 XMLHttpRequest객체를 참조하는 변수입니다.
//open함수는 XMLHttpRequest에 선언되어 있다. - 소유주이다.
//재사용성을 높이는 코드를 작성하는 첫단추는 함수 중심의 코딩을 전개하기.
//open함수는 XMWHttpRequest가 정의하고 있는 함수 입니다.
//파라미터의 갯수는 3개 입니다.
//@param - GET 전송방식(Rest API)
//@param - 해커뉴스의 최신목록을 가져오는 URL
//@param - true(:동기) or false(:비동기-default)
xhr.open("GET", NEWS_URL, false)
//send도 XMLHttpRequest제공하는 함수 입니다.
//xhr.send()//send가 호출되었을 때 서버에 요청이 간다. //waitting 상황 기다리는 중
//Objeck ->
//JSON.strigify
//JSON.parse
const v_root = document.querySelector("#root")
console.log('v_root');
//console.log(v_root.innerHTML);
v_root.innerHTML = "조회결과"
console.log(xhr.response);
console.log(xhr.responseText);//Text -> 표준
const newsList = JSON.parse(xhr.response)
console.log(newsList[0].title);//첫번째 배열의 뉴스 제목
console.log(newsList[1].title);//두번째 배열의 뉴스 제목
console.log(newsList[2].title);//세번째 배열의 뉴스 제목
console.log(newsList[2].id);//세번째 배열의 뉴스 제목
//console.log(xhr.responseXML);//xml -> null출력되었다.
//왜냐하면 응답결과가 Json이였다.
/*

*/