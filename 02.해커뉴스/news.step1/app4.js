const xhr = new XMLHttpRequest()
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
xhr.open("GET", NEWS_URL, false)
xhr.send() //waitting 상황 기다리는 중
const newsLists= [newsList]
const newsList = JSON.parse(xhr.responseText)//NodeList
console.log(newsList);
console.log(newsList[0]);
console.log(newsList[1]);
console.log(newsList[1].id);
//ul태그는 부모태그이므로 딱 한번만 감싸주면 된다.
//그래서 for문 밖에 써야 합니다.
const ul = document.createElement("ul")
//for(let i=0;i<10;i=i+1){
for(let i=0;i<10;i=i+1){
  //li태그는 10번 반복되어야 하니까 for문 안에 써야 한다. 위치문제
  const li = document.createElement("li")
  li.innerText = "뉴스제목"
  //appendChild - how?
  //ul.appendChild(document.createElement("li"))
  ul.appendChild(li) //ul태그 안에 li태그 추가를 10번 해줘
}


const v_root = document.querySelector("#root").appendChild(ul)
//console.log(v_root.innerHTML);
//v_root.innerHTML = "조회결과"
/*

*/