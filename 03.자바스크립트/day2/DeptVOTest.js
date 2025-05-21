import { DeptVO } from "./DeptVo";
//ES6 import문 지원 - Module
//NodeJs지원 - require('express') - CommonJS
const myDVO = new DeptVO(50,'개발부','부산')
myDVO.deptno = 60
myDVO.deptno = 50
console.log(myDVO.deptno);//50
console.log(myDVO.dname);//개발부
console.log(myDVO.loc);//부산

//자바스크립트를 둘로 나누어서 테스트 해 보기