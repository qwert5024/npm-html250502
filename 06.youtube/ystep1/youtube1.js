const container = document.querySelector("#root")
//비동기 통신 객체 생성하기
let xhr = new XMLHttpRequest()//인스턴스화 -> 생성자 함수 호출됨
xhr = new XMLHttpRequest() //인스턴스화 -> 생성자 함수 호출됨
const key ='AIzaSyC1HIol1C-E0blaFE0lXW9eyrj5tknNRA8'
const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${key}`
xhr.open('GET',YOUTUBE_URL, false)
xhr.send()

const result = xhr.responseText
const result2 = JSON.parse(xhr.responseText)
console.log(result);
console.log(result2.items);
console.log(result2.items.length);
const x = result2.items //[]
const y = x.length



container.innerHTML = '출력 결과'