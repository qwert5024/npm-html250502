function minus(a,b) {
  return a - b
}

const minus = (a,b) => {
  return a - b
}
//파라미터가 3개 짜리를 선언해 보기
function account(a, b, action) {//action이 결국 minus 함수임
  let result = action(a,b)
  console.log(result);//3
}
//함수 호출이다.
account(1,2, minus) //함수를 가리키는 주소번지를 넘김.