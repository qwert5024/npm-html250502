const 인사 = () => {
  //결합도를 낮추는 코드를 작성해보자.
  console.log("인사 함수 호출 성공");//로그(공통된 관심사: AOP)
  const d_root= document.querySelector(".home")
  d_root.innerHTML= "ㅁㄴㅇㅁㄴㅇㄴㅁㅇ"
}