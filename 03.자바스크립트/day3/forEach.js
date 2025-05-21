const colors = ['green','red','blue']
console.log(typeof colors);
//배열의 length사용하면 배열의 원소의 수를 대신 계산해줌.
console.log(colors.length);
for(let i=0;i<colors.length;i++) {
  console.log(colors[i]);
}

colors.forEach(element => console.log(element))
colors.forEach((element, index) => {
  console.log(element)
  console.log(index);
})
colors.forEach((element, index, colors) => {
  console.log(element);
  console.log(index);
  console.log(colors);
})
