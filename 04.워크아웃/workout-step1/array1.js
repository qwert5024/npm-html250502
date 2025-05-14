const items = [
  {id:10, name: '벤치프레스', conut:5},
  {id:20, name: '렛풀다운', conut:3},
  {id:30, name: '스퀘트', conut:7},
]

console.log(items[0].name);
console.log(items[0]['name']);
console.log(items[0].id);
console.log(items[0]['id']);

console.log(`${items[1]}`);
console.log(`${items[1]['name']}`);
console.log(`${items[1]['count']}`);

console.log(`운동이름:${items[1]['name']}(${items[1]['name']}세트`);