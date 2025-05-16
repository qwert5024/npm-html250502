const Sonata = {
  wheelNum: 4,
  speed: 50,
  carColor: "흰색"
}
const Pride = {
  wheelNum: 4,
  speed: 0,
  carColor: "핑크"
}

let cars = [Sonata, Pride]

//나는 객체 배열까지도 다룰 수 있다.

console.log(cars[0].carColor);
console.log(cars[1].carColor);
console.log(cars[1]["carColor"]);
console.log(Sonata["carColor"]);
console.log(cars[1]);
console.log(Sonata.speed, " , ", Pride.speed);