// Default parameter
// JS에서는 같은 이름의 함수를 정의할 수 없다.
// 이름이 같으면 같은 함수이다. - 파라미터 달라도 이름이 같으면 같은 함수
// 함수 선언할 수 있다.
// 파라미터의 갯수와 타입을 결정할 수 있다.
// 리턴타입을 결정할 수 있다.
// 파라미터 자리는 사용자로 부터 입력받은 값을 받아 낸다.
// call by value - 값에 의한 호출이다. -> 원시형 타입
// pass by value - 참조에 의한 호출이다. -> 참조형 타입
{
  const printMessage= (msg) =>{
    console.log('printMessage 호출');
    //사용자가 입력한 값이 null일 때 - if문
    if(msg == null){
      msg = 'default message'
    }
    return msg
  }//end of printMessage
  printMessage()
  printMessage('hello')
  {
    const printMessage= (msg = 'default message') =>{
      console.log('printMessage 호출');
      //사용자가 입력한 값이 null일 때 - if문
      return msg
    }//end of printMessage
    const res = printMessage('hi')
    printMessage('hi')
    console.log(res);
    const res2 = printMessage()
    console.log(res2);
  }//end of 객체 초기화
}