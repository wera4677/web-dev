const fs =require("fs"); //파일을 열고 읽을려면 내장함수 fs 필요

const path = require("path"); //내장된 경로 함수 (이걸 적용해야 경로 작성가능)

const express = require("express"); //익스프레스 함수 불러오기
const app =express(); //app  에 익스프레스 함수 설정 (서버열수있는 함수)

app.use(express.static("public"));  //정적 파일 요청 또는 css나 자바스크립트 요청 할수있는지 확인하는 수신 에 대한 요청이 실행
//미들웨어  .static <-정적  ("public") <-공용폴더

app.use(express.urlencoded({extended: false})) //들어오는 데이터를 분석하고 변환 / extended: false ==> 경고를 받지않도록 명시적으로 설정

app.get("/",function(req,res){
    const htmlFilePath = path.join(__dirname, "views","index.html"); //경로 지정
    res.sendFile(htmlFilePath); //html파일을 응답 으로 보낸다 sendFile()
});

app.get("/restaurants",function(req,res){
    const htmlFilePath = path.join(__dirname, "views","restaurants.html"); //경로 지정
    res.sendFile(htmlFilePath); //html파일을 응답 으로 보낸다 sendFile()
});

app.get("/recommend",function(req,res){
    const htmlFilePath = path.join(__dirname, "views","recommend.html"); //경로 지정
    res.sendFile(htmlFilePath); //html파일을 응답 으로 보낸다 sendFile()
});

app.post("/recommend",function(req,res){//사이트에서 데이터가 입력될때 (데이터)가져오기
   const restaurants = req.body;   //미들웨어(urlendoded)  추가해야지 데이터가 들어옴
   const filePath = path.join(__dirname,"data","restaurants.json");  //restaurants.json파일 연결
   
   const fileData = fs.readFileSync(filePath); //파일을 먼저 읽는다 읽어야지 텍스트 파일로 저장가능
   const storedRestaurants = JSON.parse(fileData); //텍스트 내용을 자바스크립트 객체 또는 배열로 변환

   storedRestaurants.push(restaurants) //배열로 변경한 데이터 json파일에 저장(보냄)

   fs.writeFileSync(filePath,JSON.stringify(storedRestaurants)) //JSON.stringify() 제이슨 형식으로 변경

   res.redirect("/confirm"); //자동으로 다른url로 이동하게한다
}); 

app.get("/confirm",function(req,res){
    const htmlFilePath = path.join(__dirname, "views","confirm.html"); //경로 지정
    res.sendFile(htmlFilePath); //html파일을 응답 으로 보낸다 sendFile()
});

app.get("/about",function(req,res){
    const htmlFilePath = path.join(__dirname, "views","about.html"); //경로 지정
    res.sendFile(htmlFilePath); //html파일을 응답 으로 보낸다 sendFile()
});



app.listen(3000);  //포트번호 3000지정