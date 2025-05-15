const items = [
  {id:10, name: '벤치프레스', conut:5},
  {id:20, name: '렛풀다운', conut:3},
  {id:30, name: '스퀘트', conut:7},
]

const myCars = [
  {sno:1, carName:"소나타", wheelNum: 4},
  {sno:2, carName:"그랜져", wheelNum: 4},
  {sno:3, carName:"소렌토", wheelNum: 4},
]

for(let i=0;i<myCars.length;i++) {
  console.log(myCars[i].carName);
}

const yourCar = [...myCars, {sno:5, carname:"레이", wheelNum:4}]

for(let i=0;i<yourCar.length;i++) {
  console.log(yourCar[i].carName);
}

//삭제하기


const result = myCars.filter((car) => items.sno !=2);

console.log(result);
