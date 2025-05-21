import * as all from './module1.js'

console.log(all);

console.log(all.msg);
console.log(all.names);

const myCar = new all.Pride()
console.log(myCar.speed);