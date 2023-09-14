const path = require("path") //내장된 경로 함수 (이걸 적용해야 경로 작성가능)

const express = require("express"); //익스프레스 함수 불러오기
const app =express(); //app  에 익스프레스 함수 설정 (서버열수있는 함수)

app.use(express.static("public"));  //정적 파일 요청 또는 css나 자바스크립트 요청 할수있는지 확인하는 수신 에 대한 요청이 실행
//미들웨어  .static <-정적  ("public") <-공용폴더



app.get("/",function(req,res){
    const htmlFilePath = path.join(__dirname, "views","index.html"); //경로 지정
    res.sendFile(htmlFilePath) //html파일을 응답 으로 보낸다 sendFile()
});

app.get("/restaurants",function(req,res){
    const htmlFilePath = path.join(__dirname, "views","restaurants.html"); //경로 지정
    res.sendFile(htmlFilePath) //html파일을 응답 으로 보낸다 sendFile()
});

app.get("/recommend",function(req,res){
    const htmlFilePath = path.join(__dirname, "views","recommend.html"); //경로 지정
    res.sendFile(htmlFilePath) //html파일을 응답 으로 보낸다 sendFile()
});

app.get("/confirm",function(req,res){
    const htmlFilePath = path.join(__dirname, "views","confirm.html"); //경로 지정
    res.sendFile(htmlFilePath) //html파일을 응답 으로 보낸다 sendFile()
});

app.get("/about",function(req,res){
    const htmlFilePath = path.join(__dirname, "views","about.html"); //경로 지정
    res.sendFile(htmlFilePath) //html파일을 응답 으로 보낸다 sendFile()
});



app.listen(3000);  //포트번호 3000지정