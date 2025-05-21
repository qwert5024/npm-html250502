// Destructuring assignment 
// 구조분해 할당
{
  console.log(typeof {});
  const sonata = {
    carColor: 'black',
    speed: 30,
    wheelNum: 4
  }
  //아래는 구조분해 할당을 사용하지 않았다.
  {
  const carColor = sonata.carColor
  const speed =sonata.speed
  console.log(carColor, speed);
  }
  //
  {
    const {carColor, speed, wheelNum}= sonata
    console.log(carColor, speed, wheelNum);

    // 다른 이름으로 정의해서 사용 가능함
    const { carColor: sonataColor, speed: sonataSpeed, wheelNum: sonataWheelNum} = sonata
    console.log(sonataColor,sonataSpeed,sonataWheelNum);

  }
  //array - 배열에서는 [] 기호를 사용한다.
  const fruits = ['🍅','🥝','🍇']
  {
    const one = fruits[0]
    const two = fruits[1]
    const three = fruits[2]
    console.log(one,two,three);
  }
  //구조 분해 할당으로 바꾸어 본다.
  {
    const [one,two,three] = fruits
    console.log(one,two,three);
  } 
  //객체 초기자 안에서만 접근이 가능하다.
  //아래는 에러가 발생함.
  //console.log(one,two,three); 
}