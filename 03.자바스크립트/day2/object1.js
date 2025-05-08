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

const users = [userA, userB]
console.log(users[0]);
console.log(users[0].age);
console.log(users[0]["age"]);
console.log(users[0].gender);
console.log(users[0]["gender"]);
console.log(users[1]);

console.log(userA);
console.log(userA.name + " , " + userB.name);
console.log(userA.age);
console.log(userA.gender);
console.log(userA["name"]);
console.log(userA["age"]);
console.log(userB["age"]);