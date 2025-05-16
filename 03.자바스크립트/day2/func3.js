// 주문을 한다. - 등록 - INSERT - POST(REST API)
// 무엇을 주문할거니?
const 주문 = (f1,f2) => { //함수구현
  console.log('주문',f1,f2);
}
// 파라미터에 대한 정보는 API찾아본다
// 파라미터의 갯수
// 파라미터의 타입(문자열, 숫자, 불리언)
주문('🍓','🍌') //호출 - 파라미터, 매개변수, 인자값

// 70, 80, 90 평균을 구하시오.
// 평균을 구하기 위해서는 총점을 먼저 구해야 한다.
const 점수 = [70,80,90]

let 합 = 0

for(let i=0;i<점수.length;i=i+1){
  합 = 합 + 점수[i]
}

let avg = 합/3.0

function funcHap (){
  return 합
}
function funcHap2 (){
  합 = 100
}

function funcAvg (합) {
  let avg = 합/3.0
  //함수 안에서만 출력할 수 있다.
  console.log(avg);
}

const tot = funcHap()
//함수에서 return을 사용했으니까 함수 밖에서 출력할 수 있다.
console.log(tot);
const tot2 = funcHap2()
console.log(tot2);

const avg1 = funcAvg(tot)
console.log(avg1);
