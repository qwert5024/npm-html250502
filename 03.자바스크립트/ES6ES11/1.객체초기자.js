// 객체 초기자
// 객체 초기자는 중괄호({})로 묶인 0개 이상의 객체의 프로퍼티명과 관련 값의 쌍을
// 콤마로 구분한 목록 입니다.
console.log('1');
let i = 3
console.log(3);
{
  //컴파일을 하지 않는다. - 문법체크하지 않는다. - 컴파일 에러이다.
  //변수 선언시 타입을 작성하지 않는다.- 타입을 알 수 없다.
  //런타임시에 타입을 알 수 있다. 타입이 결정된다.
  const x = 1
  console.log(x);

  const emp = {
    ename: 'scott',
    job: 'CLERK',
    sal : 5000,
  }
  console.log(emp);
  const ename = 'tiger'
  const job = 'SALESMAN'

  const emp2 = {
    ename: ename,
    job: job,

    //key와 value가 동일할 때는 생략이 가능함
  }
  console.log(emp2);
  const emp3 = {
    ename,
    job,
  }
  console.log(emp3);
}
// 실행방법
// node 1.객체초기자.js
// nodemon 1.객체초기자.js