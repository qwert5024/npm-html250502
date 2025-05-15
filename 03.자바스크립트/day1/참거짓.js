//참 거짓
//1) false
//2) 0
//3) null
//4) undefined
//5) NaN(Not a Number)
//6) ''빈문자열

//if문은 조건문이다. 조건을 만족할 때만 실행기회를 갖는다.
//조건을 만족하지 못하면 단 한 번도 실행되지 못한다.
//if괄호안에는 참인지 거짓인지를 판별하는 조건식이 온다.
//괄호안에는 비교연산자가 올 수 있다. 1>3 3 <10
//실행문 한 줄이라면 좌중괄호와 우중괄호는 생략할 수 있다.
if(true) console.log('참');

if(123) console.log('123은 참이다.');

if('0') {console.log('참');
}
if(0) {console.log('거짓');
}
if(NaN){
  console.log('if');
}else{
  console.log('else');
}

console.log(1+'1');
console.log(1+parseInt('1'));
console.log(1+parseInt('안녕'));
console.log(null);
console.log(typeof null);

if(null) {

}else{
  console.log('여기가 출력되었다면 null너는 false분명해');
}
if(undefined) {

}else{
  console.log('여기가 출력되었다면 undefined너는 false분명해');
}
if('') {

}else{
  console.log('여기가 출력되었다면 ""너는 false분명해');
}