  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FS_ARIKEY,
    authDomain: process.env.REACT_APP_FS_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FS_DATABASEURL,
    projectId: process.env.REACT_APP_FS_PROJECTID,
    storageBucket: process.env.REACT_APP_FS_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FS_MESSAGINGSenderId,
    appId: process.env.REACT_APP_FS_APPID,
  };
  export const app = initializeApp(firebaseConfig);
//파이어베이스 API를 활용하여 웹서비스를 제공받기 위한 초기화 작업임.
//앞에 export를 붙여야 외부(다른파일 예:html, js)에서 사용이 가능하다. (ES6 모듈)
//초기화 - 인증 - 서버측 요청 - 응답 (토큰값 쥔다.)
