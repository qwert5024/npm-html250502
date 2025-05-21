// 0부터 9사이의 숫자 중 두 수를 입력받아서 합을 구하는
// 함수를 구현하시오
// 두 수를 입력 받아서 -> 피라미터 자리의 역할입니다.
// 사용자 정의 함수 선언하기
// 함수 이름은 무엇입니까? - add
// add함수의 파라미터는 몇개 인가요? 2개
// 아래 함수에는 변수의 갯수는 몇개 인가요? 3개
// hap의 초기화는 얼마로 해야 할까요? hap-(a+b)
function add(a, b) {
  console.log(a);
  //처리를 한다.
  let hap = a + b
  return hap
}//end of add

console.log(add(1,2));
console.log(add(2,3));
console.log(add(3,4));
console.log(add());
//함수 선언시에 파라미터에 초기화가 가능하다
//함수 파라미터 자리는 호출이 될 때 값이 결정된다.
//값에 의한 호출이다.
function add2(a=1) {//a=5
  console.log(a);
}
add2(5)