// Spread syntax - 주소의 참조값만 복사해 온다.
const emp = { key: 'empno'} //사원번호. 사원집합의 primary key(기본키)
const dept = { key: 'deptno'}//부서번호. 부서집합의 primary key(기본키)
const array = [emp, dept]
console.log(array);
//배열을 복사 해야 한다면.....
//spread syntax를 활용하여 복사할 수 있다.
const arrayCopy = [...array]
console.log(arrayCopy);

console.log(array == arrayCopy);//false
console.log(array === arrayCopy);//false

//array가 가리키는 배열과 arrayCopy가 가리키는 배열이 다르다.

console.log(arrayCopy==[...arrayCopy,{key:'emali'}])
console.log(arrayCopy)
console.log([...arrayCopy,{key:'emali'}])

const arrayCopy2 = [...arrayCopy, {key:'emali'}]
console.log(arrayCopy== arrayCopy2);
/*
1. 얕은 복사(Shallow Copy)
객체를 복사할 때 해당 객체만 복사하여 새 객체를 생성한다.
복사된 객체의 인스턴스 변수는 원복 객체의 인스턴스 변수와 같은 메모리 주소를 참조한다.
따라서, 해당 메모리의 주소값이 변경되면 원본 객체 및 복사 객체의 인스턴스 변수값이 변경된다.
2. 깊은 복사(Deep Copy)
객체를 복사할 때 해당 객체와 인스턴스 변수까지 복사하는 방식
전부를 복사하여 새 주소에 담기 때문에 참조를 공유하지 않는다.

*/