const xhr = new XMLHttpRequest()
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
xhr.open("GET", NEWS_URL, false)
xhr.send() //waitting 상황 기다리는 중

const newsList = JSON.parse(xhr.responseText)
console.log(newsList);
console.log(typeof newsList);//object출력됨 {}, []
//배열은 어떻게 선언하나요?
const arr = []
arr = newsList //치환
console.log(newsList.length);
console.log(arr.length);//원소의 갯수가 30개인가?
console.log(arr[0]);

const v_root = document.querySelector("#root")
//console.log(v_root.innerHTML);
v_root.innerHTML = "조회결과"
/*

*/