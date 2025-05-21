import { insa, msg, names, Pride } from "./module1.js";
console.log(msg);
//msg = '안녕'
//insa = '내일봐'
console.log(insa);
//3<3 -> false : for문 블록을 빠져 나간다.
//for문안에서 어떤 조건을 만족하면 빠져나가기를 할 때 break사용할 수 있다.
//무한루프를 방지하는 코드를 작성한다.
for(let i=0;i<names.length;i++){//i++ 후위연산자 i=i+1
  console.log(names[i]);
  if(i=1) {
    break
  }
}
console.log('여기');

console.log(Pride);

const himCar = new Pride()
console.log(himCar.speed);
himCar.speedDown()
himCar.speedDown()
himCar.speedDown()
console.log(himCar.speed);
const herCar = new Pride
console.log(herCar.speed);