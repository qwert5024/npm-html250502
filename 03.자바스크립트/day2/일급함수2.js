let a = 1
a = 2
//변수는 한 번에 하나만 담을 수 있다.
//1과 2를 모두 기억할 수 없다.
console.log(a);

const func1 = (a) => {
  console.log(a);
}

func1(a)

const methodA = (func1) =>{
  console.log('methodA');
  func1(3)
}

methodA(func1)

/* 
  함수를 다른 변수와 동일하게 다루는 언어는 일급함수를 가졌다고 함
  일급함수를 가진 언어에서는 파라미터로 사용하거나 반환하는 것도 가능함.
*/