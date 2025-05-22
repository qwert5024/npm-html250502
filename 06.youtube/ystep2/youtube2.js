const container = document.querySelector("#root")
let content = ''
//비동기 통신 객체 생성하기
let xhr = new XMLHttpRequest()//인스턴스화 -> 생성자 함수 호출됨
xhr = new XMLHttpRequest() //인스턴스화 -> 생성자 함수 호출됨
const key ='AIzaSyC1HIol1C-E0blaFE0lXW9eyrj5tknNRA8'
const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${key}`
xhr.open('GET',YOUTUBE_URL, false)
xhr.send()

const result = JSON.parse(xhr.responseText)
const items = result.items

content += `<ul class='videos'>`
for(let i=0; i<items.length;i++) {
  content += `<li class='container'>`
  content += `<div class='video'>`
  content += `<img src='${items[i].snippet.thumbnails.medium.url}'>`
  content += `<div>`
  content += `<p class='video'>${items[i].snippet.title}</p>`
  content += `<p class='channel'>${items[i].snippet.channelTitle}</p>`
  content += `</div>`
  content += `</div>`
  content += `</li>`
}
content += `</ul>`

container.innerHTML = content