const xhr = new XMLHttpRequest()
const container = document.querySelector("#root")
const content = document.createElement("div")
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json"

function getData(url){
  xhr.open("GET", url, false)
  xhr.send() 
  return JSON.parse(xhr.responseText)
}//end of getData

const newsSource = getData(NEWS_URL)
const ul = document.createElement("ul")

window.addEventListener("hashchange",() => {

    const id = location.hash.substring(1)
    const newsContent = getData(CONTENT_URL.replace("@id", id))
    const title = document.createElement("h1")//<h1>
    container.innerHTML = `
      <h1>${newsContent.title}</h1>
      <div>
        <a href="#">목록으로</a>
      </div>
    `
})//end of hashchange

const  newsList = []

newsList.push('<ul>')
for(let i=0;i<10;i++){
  newsList.push(`
    <li>
      <a href="#${newsSource[i].id}">
        ${newsSource[i].title}(${newsSource[i].comments_count})
      </a>
    </li>
  `)
}
newsList.push('</ul>')
console.log(newsList);
// 빈문자열을 넣어서 배열을 구분자 없는 문자열로 바꾸어주는 함수 이다.
container.innerHTML = newsList.join('')