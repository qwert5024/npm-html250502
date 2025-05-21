const { config } = require("dotenv");

class DeptVO {
  //생성자 함수 구현 - 전역변수에 대한 초기화를 담당함.
  constructor(deptno, dname, loc) {
    this.deptno = deptno //this가 없는건 지역 변수임
    this.dname = dname
    this.loc = loc
  }
}//end of DeptVO

//원본과 복사본 -> 참조형 변수
//객체 생성하기
const dvo1 = new DeptVO(10,'개발부','서울')
console.log(dvo1.deptno);//null
console.log(typeof null);//object
console.log(typeof undefined);//object

//참조형 치환
let i = 1
i = 2
let dvo2 = dvo1
console.log(dvo2.deptno);//10
console.log(dvo1 == dvo2);
console.log(dvo1 === dvo2);
dvo2 = new DeptVO(30,'인사부','부산')
console.log(dvo2.deptno);//30
//dvo1의 주소번지와 dvo2의 주소번지가 다르다.

console.log(dvo1 === dvo2);
dvo2.deptno = 20

console.log(dvo1.deptno);//10
console.log(dvo2.deptno);//20

console.log(dvo1.deptno === dvo2.deptno);
