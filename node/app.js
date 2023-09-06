//node.js 는 독립적으로 움직이는 코드를 작성한다
//const userName = "Maximilian";
//console.log(userName);

const http = require("http"); //노드 js 내장특수 기능 / http 는 요청과 응답 처리


function handleRequest(request, response) { //들어오는 요청을 처리하는 함수 request는 받기 response는 보내기
    //localhost:300/currentime  현재 시각 표현
    if (request.url === "/currentime"){ //url은 포트 뒷부분 갖게하는 속성
        response.statusCode = 200; //statusCode 는 요청이 성공했는지 여부를 알려줌
        response.end("<h1>" + new Date().toISOString() + "</h1>"); //new Date() = 현재시각 표시 toISOString()는 문자열 표현으로 변환해서 텍스트로 바꿈

    }else if (request.url === "/"){
        response.statusCode = 200;
        response.end("<h1>Hello world!</h1>"); 

    }
   

}

const server = http.createServer(handleRequest); //웹서버 생성  (여기서 아이디어 요청처리함)

server.listen(3000); //수신대기 첫번째 매개변수로 포트번호,

//ex) amazon.com =>  서버에 요청을 보내서 웹사이트를 반환
//amazon.com : 80(암호화 X) or 443(SSL 암호화된 보안방식) =>포트번호
//요청을 보낼때 수행하는 포트 를 이용하여 진입한다
// response.end("<h1>Hello world!</h1>"); //응답준비 끝내고 보내야하는 데이터 전달

