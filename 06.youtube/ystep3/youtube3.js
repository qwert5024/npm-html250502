const container = document.querySelector('#root')
//조건 검색 결과를 화면에 출력하기
let keyword;
//input type text에서 입력 후 엔터를 쳤을 때
const handleSearch = (event) => {
  console.log('onkeypress');
  console.log(event.keyCode);//13
  if(13 == event.keyCode){
    const keyword = document.querySelector(".input")
    let word = keyword.value
    console.log('엔터');
    search(word)
  }
}

const search = (query) => {
  console.log("사용자가 입력한 키워드는 " + query);
}//end of search
//함수 호출하기 - 세미콜론이나 아무것도 안적음
//함수 선언하기 - {}
//search('AI')

container.innerHTML = '조회결과'


/* 
1. 키워드를 입력한 뒤 엔터를 치거나 검색이미지 버튼을 클릭했을 때 유튜브 서버에 요청을 한다
const xhr = new XMLHttpRequest()
xhr.open
xhr.send

function onKeyPress(event){
  if(event.keyCode === 13){
    search(사용자가 입력한 키워드)
  }
}

}
2. 이벤트 소스가 두 가지 경우 이므로 함수를 설계한다.
- search(키워드), 조회결과 처리, 결과를가지고 화면 처리한다.
- 조회하는 함수와 화면을 처리하는 함수 두개를 가져야 하나???
- 그냥 하나로 하면 안되나?
- 두 개로 하는 것과 하나로 하는것 중 어떤 쪽이 더 나은선택인가?

3. 조건검색을 해야 하므로 사용자로 부터 키워드를 입력받는다.
*/