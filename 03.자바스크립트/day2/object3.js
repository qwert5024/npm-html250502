// 배열
const fruits = ['🍌','🍋','🍍','🍇','🍓']
console.log(fruits[0]);
console.log(fruits[2]);
//원소의 갯수가 3개이지만 첫번째 방의 인덱스 값이 0부터 2니까
//마지막 방의 인덱스 값은 n-1이다.
//null과 undefined는 다르다.
console.log(fruits[3]);
console.log(fruits.length);//3출력
//for(let i=0;i<fruits.length;i=i+1){
//for(let i=0;i<3;i=i+1){
//for문을 사용하면 데이터셋이 늘었다가 줄었다가 하더라도
//코드를 수정하지 않아도 괜찮아
for(let i=0;i<fruits.length;i++){//반복문
  console.log(fruits[i]);
}
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[3]);