// Object(객체) = 필드 + 함수
const userA = {
  name: "강감찬",
  age: 55,
  gender: "남자"
}
const userB = {
  name: "이순신",
  age: 57,
  gender: "남자"
}

console.log(userA);
console.log(userA.name + " , " + userB.name);
console.log(userA.age);
console.log(userA.gender);
console.log(userA["name"]);
console.log(userA["age"]);
console.log(userB["age"]);