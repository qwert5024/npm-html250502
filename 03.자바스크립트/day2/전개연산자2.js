let dept = {
  deptno: 10,
  dname: "개발부",
  loc: "제주"
}

let depts = [
  {deptno:10, dname:"총무부", loc:"인천"},
  {deptno:20, dname:"인사부", loc:"서울"},
  {deptno:30, dname:"기획부", loc:"부산"},
]

let deptsAdd = [...depts, {deptno:40, dname: '개발부', loe: '제주'}]

depts.forEach(row =>{
  //console.log(row);
  console.log(row.dname);
  console.log(row["dname"]);
  console.log(row[0]);
})
console.log(depts[0]);
console.log(depts[1]);
console.log(depts[2]);
//배열은 인덱스가 0부터 이므로 마지막 인덱스값은 n-1 이다.
console.log(depts[3]);//3을 주면 에러
console.log(deptsAdd.length);
console.log(deptsAdd[3]);

