// 널 병합 연산자(??)
// 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고
// 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자이다.
{
  {
    const name = 'scott'
    const userName = name || 'Guest'
    //insert here
    console.log(userName);
  }
  {
    const name = null
    const userName = name || 'Guest'
    console.log(userName);
  }
  //문제제기 - 빈문자열이 초기값으로 사용되었다면 어떡하지?
  {
    const name = ''
    const userName = name || 'Guest'
    console.log(userName);
    const num = 0
    const msg = num || 'undefined'
    console.log(msg);
  }
  //문제해결
  {
    const name = ''
    const userName = name ?? 'Guest'
    console.log(userName);
    const num = 0
    const msg = num ?? 'undefined'
    console.log(msg);
  }
} 