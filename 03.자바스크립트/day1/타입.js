//자료형
//원시형 타입(primative data type) - stack공간에 담김 - 자동소멸
//  문자형, 숫자, 논리형(if문과 for문-true, false)
//참조형 타입(reference data type) - heap공간 - 중요
//함수도 오브젝트 이다. 그래서 주소번지를 갖게 되고 함수가 있는 곳은 다른 곳이다.
//함수의 이름은 함수를 참조함.
//-> 일급함수, 일급객체, 고차함수

console.log(typeof 123);
console.log(typeof '123');
//특정한 변수의 값을 비워둘 때
console.log(typeof null);
console.log(typeof undefined);
// 어떤 사물을 대표하는 고유명사
let tomato = {
  name: '토마토',
  color: 'red',
  display: '🍅'
}

console.log(tomato.color);
console.log(tomato.display);
console.log(tomato.name);