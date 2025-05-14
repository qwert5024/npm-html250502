//사용자가 입력하는 콤포넌트 -> input 태그
const items = document.querySelector(".items") //ul태그야

const input = document.querySelector(".footer_input")//input태그야

const addBtn = document.querySelector(".footer_button")//홈버튼 플러스야
//input태그에서 엔터를 쳤을 때 또는 plus버튼을 클릭했을 때
//재사용을 위해서 함수로 설계 하였다.
const onAdd=()=>{
  //사용자가 입력한 친구 만나기를 읽어와서 createItem함수를 호출할 때
  //파라미터로 넘긴다.
  const itemName = input.value
  console.log("사용자가 입력한 오늘의 할 일 : "+itemName);
  //혹시 아무것도 입력하지 않고서 엔터나 버튼을 클릭한 거야?
  //if문 괄호안에는 참 또는 거짓을 판별할 수 있는 조건문이 와야 한다.
  //==나 === 모두 같아? 다른점은 세 개일 때는 타입도 같아가? 포함됨.
  //if(1==1){}true
  //if(1=='1'){}true
  //if(1===1){}true
  //if(1==='1'){}flase
  //if(0){} flase, 0이 아닌건 true이다.
  //if
  //조건문은 우리 프로그램의 흐름을 바꾼다-
  if(itemName === ''){
    input.focus()
    //if문 아래쪽에 있는 코드는 실행 기회를 갖지 못한다.
    return ///if문 안에서 return을 만나면 해당 함수를 빠져 나간다.
  }//end of if


  const item = createItem(itemName)
  items.appendChild(item)
  //t새로 추가된 아이템으로 스크롤링
  items.scrollIntoView({block: 'center'})
  input.value = ''
  input.focus()
}//end of anAdd
//onAdd 즉 이벤트가 발동되었을 때 인터셉트 하여서 사용자가 입력한 itemName을 
//ul(.items)태그 아래 li태그에 삽입한다.
const createItem=(itemName)=>{
  console.log(itemName);//사용자가 엔터치거나 plus버튼을 눌렀을 결정된다.
  const itemRow = document.createElement("li")
  itemRow.innerHTML=`
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
  //return은 함수의 가장 맨 끝에 작성합니다.
  return itemRow
}//end of createItem

addBtn.addEventListener('click', ()=>{
  console.log('plus버튼 클릭');
  onAdd();
})
input.addEventListener('keypress', (event)=>{
  //console.log(event.key);//13
  if (event.key === 'Enter'){
    //
    console.log('엔터키를 눌렀습니다.');
    onAdd();
  }
})