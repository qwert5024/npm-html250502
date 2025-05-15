//우리는 전역변수로 선언하기로 하였다.
const sampleTodos = [
  {id: 1, text: '학교가기', completed: true},
  {id: 2, text: '친구만나기', completed: false},
  {id: 3, text: '과제제출하기', completed: false},//ES5
]

//얕은복사 & 깊은복사
//현재 할일 목록 배열 복사하기
let todos = [...sampleTodos]

//함수를 설계하기 - 기초는 아니다.
//배열에 있는 일정을 삭제하기 -> 삭제된 내용은 목록에 보이지 않아야 한다.
//배열에 있는 일정 중 수정하기 -> 수정한 내용은 목록에서 바뀌어 있어야 한다.
//새로고침을 담당하는 함수를 구현해 보세요.

function replaceAll(){
  //기존에 값은 비운다.- 초기화
  //이런 코드를 굳이 DOM API를 쓸 필요가 있나요?
  //items.innerHTML =''
  //복사한 todos배열의 각 항목을 화면에 표시하기
  //todos는 Array이고 todo는 Array들어 있는 {} -object 이다.
  todos.forEach(todo => {
    if(todo.id===2){
      console.log(todo);
      return
    }
    console.log(todo);   
  })
}
replaceAll()
console.log('여기');
const loadSampleBtn = document.querySelector('.load_sample_button')

const getTodoList = () => {
  console.log("콜백함수");
  while(items.firstChild){
    items.removeChild(items.firstChild)
  }//end of while
  sampleTodos.forEach(todo => {
    const item = createItem(todo.text)
    items.appendChild(item)
  })
}//end of getTodoList
loadSampleBtn.addEventListener('click', getTodoList)
const resetBtn = document.querySelector(".reset_button")
const deleteAll = () =>{
  console.log("모두 삭제");
  while(items.firstChild){
    items.removeChild(items.firstChild)
  }//end of while
}
resetBtn.addEventListener('click', deleteAll)



const items = document.querySelector(".items") //ul태그야
const input = document.querySelector(".footer_input")//input태그
const addBtn = document.querySelector(".footer_button")
const onAdd=()=> {

  const itemName = input.value
  console.log("사용자가 입력한 오늘의 할 일 : "+itemName);

  if(itemName === ''){
    input.focus()
    return 
  }


  const item = createItem(itemName)
  items.appendChild(item)
  item.scrollIntoView({block: 'center'})
  input.value = ''
  input.focus()
}//end of onAdd

const createItem=(itemName)=>{
  console.log(itemName);
  const itemRow = document.createElement("li")
  itemRow.innerHTML = `
    <div class="item">
      <span class="item_name">${itemName}</span>
      <button class="item-delete">
        <i class="fas fa-trash"></i>
      </button>
    </div>
    <div class="item_divider"></div>
  `
  const deleteBtn = itemRow.querySelector(".item-delete")
  deleteBtn.addEventListener('click',()=>{
    items.removeChild(itemRow)
  })

  return itemRow
}//end of createItem
addBtn.addEventListener('click', ()=>{
  console.log('plus버튼 클릭');
  onAdd();
})
input.addEventListener('keypress', (event)=>{
  if (event.key === 'Enter') {
    console.log('엔터키를 눌렀습니다.');
    onAdd();
  }
});