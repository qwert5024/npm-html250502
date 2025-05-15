// 호이스팅(hoisting)
// 블록안에서 선언된 지역변수가 코드 블록 밖으로 끌어올려지면서
// 강제로 전역변수화 되는 현상
// 선언부를 보고 타입을 알 수가 없다. - 위험하다. -> typescript
const text = 0;
console.log(text);

const btns = document.querySelectorAll;("ul li")

// 즉시 실행 함수
for(var i=0;i<5;i++){
  ((index) => {
    btns[i].addEventListener('click',() => {
      console.log(i);
    }
  )})(i)
}//end of for