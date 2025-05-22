const container = document.querySelector('#root')

let keyword;

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


container.innerHTML = '조회결과'
