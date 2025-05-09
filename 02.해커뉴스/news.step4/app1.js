const xhr = new XMLHttpRequest()
const content = document.createElement("div")
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json"
const newsList = []
newsList.push('<ul>')
console.log(newsList);
//태그 생성에 DOM API를 사용하지 않았다.
//대신에 템플릿 리터럴을 사용하여 문자열로 처리하였다.
//그랬더니 li태그 안에 a태그가 잘 보인다.
//양은 늘어나더라도 복잡도는 늘어나지 않도록 코딩을 해라
//-> Handlebars 아이디어다.
for(let i=0;i<10;i++){
  newsList.push(`
    <li>
      <a href="#${4897650}">뉴스제목
      </a>
    </li>
  `)
}
newsList.push('</ul>')
console.log(newsList);
// 빈 문자열을 넣어서 배열을 구분자 없는 문자열로 바꾸어주는 함수 이다.
document.querySelector("#root").innerHTML = newsList.join('')
