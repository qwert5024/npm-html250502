//증감연산자 - for문과 if문 흐름을 바꾼다.
// 데이터 정제하기
let a = 0
console.log(a);

a = a + 1
console.log(a);

a++
console.log(a);
//대임을 먼저하고 1을 증가시킨다.
//1을 증가시킨 다음에 대입한다.
//++가 뒤에 있으면 후위연산자
// 연산자가 여러개 있을 때 우선순위가 있다.
let b = a++
console.log(`a:${a}, b:${b}`);

b = ++a
console.log(`a:${a}, b:${b}`);

//비교 연산자, 산술 연산자, 대입 연산자
//==값만 비교, ===값과 타입까지도 비교함
console.log(2=='2');
console.log(2==='2');

//원시형 타입
//참조형 타입

const myCar = {
  name: "소나타",
  color: "red",
  speed: 50
}
const himCar = {
  name: "소나타",
  color: "red",
  speed: 50
}
//myCar의 주소번지와 himCar주소번지가 같나?
console.log(myCar==himCar);
console.log(myCar===himCar);

let herCar = himCar
console.log(herCar==himCar);
console.log(herCar===himCar);

//+연산자 주의
let text;
text = 10 + '10'
console.log(text);
let a1= '10'
console.log(10+a1);
console.log(typeof a1);
a1 = parseInt(a1)
console.log(typeof a1);

//할당 연산자
let x = 1
x += 1 //먼저 더하고 나중에 대입하세요
console.log(x);
x *= 2
console.log(x);

let e = 100
e *= 2000
console.log(e);