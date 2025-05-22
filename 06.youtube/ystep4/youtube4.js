//비동기 통신 객체 생성하기
const xhr = new XMLHttpRequest()
//미리 생성을 해 둘까?
//아니면 search함수가 호출될 때 마다 객체 생성을 할까?
const container = document.querySelector('#root')

const handleSearch = (event) => {
  if(13 == event.keyCode){
    const keyword = document.querySelector(".input")
    let word = keyword.value
    console.log('엔터');
    search(word)
  }
}

const search = (query) => {
  console.log("사용자가 입력한 키워드는 " + query);
  const SEARCH_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyC1HIol1C-E0blaFE0lXW9eyrj5tknNRA8`
  
  xhr.open('GET',SEARCH_URL, false)
  xhr.send()

  const videoList = []
  const result = JSON.parse(xhr.responseText)
  //console.log(result.items);
  //썸네일과 채널이름 영상제목은 snippet안에 있지만 썸네일 클릭시 영상 재생에
  //필요한 videoId는 snippet 밖에 있다.
  const vitems = result.items.map(item => ({...item, id: item.id.videoID }));
  //console.log(vitems);
  videoList.push('<ul class="videos">')
  for(let i=0;i<vitems.length;i++){
    videoList.push(`<li>${i}</li>`)
  }
  videoList.push('</ul>')
  container.innerHTML = videoList.join("")
}//end of search

container.innerHTML = '조회결과'
