//node.js 는 독립적으로 움직이는 코드를 작성한다
//const userName = "Maximilian";
//console.log(userName);
const fs = require("fs");//파일시스템 노드js 내장 함수
const path = require("path");   //제이슨 경로 구성할려면 노드에 내장된 핵심 패키지 필요

const express = require("express"); //설치한 익스프레스 사용
const app = express(); //exprss패키지는 node.js를 대신하는것이 아니라 향상시킨다


app.use(express.urlencoded({//들어오는 요청에 어떤종류의 데이터가 있는지 분석후에 변환해야 한다고 명시적으로 알림 == 미들웨어 함수
    extended: false, //경고를 받지않도록 명시적으로 설정
})); //들어오는 모든 요청에 적용 /urlencoded 은 body 파서를 설정하는 메서드 (데이터 파서를 분석하여 자바스크립트객체로 변환)


app.get("/currenttime",function(req, res) {
    res.send("<h1>" + new Date().toISOString() + "</h1>");   //익스프레스 에서 사용하는 응답 객체(send) /보내는 메서드
    
}); // (주소설정가능) localhost:3000/currenttime  매개변수(경로, 들어오는요청의대한 함수 )

app.get("/" , function(req, res) { //if문을 쓰지 않고 별도의 경로를 만들어준다
    res.send('<form action="/store-user" method="POST"><label>Your Name:</label><input type="text" name="username"><button>Submit</button></form>');
    //서버에 저장 할려면 method="POST" 사용
});//localhost:3000/

app.post("/store-user", function(req, res) {
    const userName = req.body.username; // username 의 데이터 받기
   
    const filePath = path.join(__dirname,"../data/users.json");  //절대 경로가 내장된변수(__dirname) 데이터 저장할곳 지정

    const fileData = fs.readFileSync(filePath); //파일을 먼저 읽는다 읽어야지 텍스트 파일로 저장가능
    const existingUsers = JSON.parse(fileData);   //텍스트 내용을 자바스크립트 객체 또는 배열로 변환

    existingUsers.push(userName);  //배열을 사용하여 목록에 사용자 이름 추가

    fs.writeFileSync(filePath, JSON.stringify(existingUsers));  //제이슨에 데이터 저장하기위해 사용 /Sync 은 원하는 작업 즉시수행
  
    res.send("<h1>Username stored!</h1>"); //보내기

}); //(경로지정, 함수)

app.get("/users", function(req, res) {
    const filePath = path.join(__dirname,"../data/users.json");  //절대 경로가 내장된변수(__dirname) 데이터 저장할곳 지정

    const fileData = fs.readFileSync(filePath); //파일을 먼저 읽는다 읽어야지 텍스트 파일로 저장가능
    const existingUsers = JSON.parse(fileData);   //텍스트 내용을 자바스크립트 객체 또는 배열로 변환

    let responseData = "<ul>";

    for (const user of existingUsers) { //배열을 통해 모든 사용자를 살펴보고 응답 데이터 업데이트
        responseData += "<li>" + user + "</li>"; //새로운 문자열 추가
    }

    responseData += "</ul>";

    res.send(responseData);

}); //모든 사용자를 출력할수있는 경로 생성



app.listen(3000);//수신대기 (포트번호)











//익스프레스 사용하지 않고 서버 생성 하는법
//------------------------------------------------------------------------------------------------

//const http = require("http"); //노드 js 내장특수 기능 / http 는 요청과 응답 처리

//function handleRequest(request, response) { //들어오는 요청을 처리하는 함수 request는 받기 response는 보내기
    //localhost:300/currentime  현재 시각 표현
//     if (request.url === "/currentime"){ //url은 포트 뒷부분 갖게하는 속성
//         response.statusCode = 200; //statusCode 는 요청이 성공했는지 여부를 알려줌
//         response.end("<h1>" + new Date().toISOString() + "</h1>"); //new Date() = 현재시각 표시 toISOString()는 문자열 표현으로 변환해서 텍스트로 바꿈

//     }else if (request.url === "/"){
//         response.statusCode = 200;
//         response.end("<h1>Hello world!</h1>"); 

//     }
   

// }

// const server = http.createServer(handleRequest); //웹서버 생성  (여기서 아이디어 요청처리함)

// server.listen(3000); //수신대기 첫번째 매개변수로 포트번호,

//ex) amazon.com =>  서버에 요청을 보내서 웹사이트를 반환
//amazon.com : 80(암호화 X) or 443(SSL 암호화된 보안방식) =>포트번호
//요청을 보낼때 수행하는 포트 를 이용하여 진입한다
// response.end("<h1>Hello world!</h1>"); //응답준비 끝내고 보내야하는 데이터 전달

