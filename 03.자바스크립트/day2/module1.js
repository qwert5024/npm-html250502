//xxx.js파일을 여러개 만들 수 있다.
//왜 여러개로 나누지? 유지보수-> 재사용성, 업무별로 나눈다.
//어떤 변수나 클래스를 다른 개발자도 공유하기를 원한다.
//외부에서 사용하도록 허락할 대는 앞에 export붙인다.
//또는 export default 123
//이렇게 선언하면 외부에서 참조할 수 있다. 호출할 수 있다. 출력할 수 있다.
export const msg = "hello world"
export let insa = "안녕"
export let names = ["강감찬","홍길동","김유신"]

export class Pride {
  constructor(){
    this.wheelNum = 4
    this.carName = "2025년형 프라이드"
    this.speed = 30
  }
  speedDown = () => {
    this.speed = this.speed - 1
  }
}//end of Pride
