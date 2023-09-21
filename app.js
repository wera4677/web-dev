const fs =require("fs"); //파일을 열고 읽을려면 내장함수 fs 필요

const path = require("path"); //내장된 경로 함수 (이걸 적용해야 경로 작성가능)

const express = require("express"); //익스프레스 함수 불러오기

const app =express(); //app  에 익스프레스 함수 설정 (서버열수있는 함수)

app.set("views", path.join(__dirname,"views")); //ejs엔진을 사용하기전에 해야하는 설정 (처리하려는 템플릿 파일을 찾을 위치를 익스프레스에 알림)
app.set("view engine","ejs"); //익스프레스 앱에 대한 특정 옵션을 설정가능

app.use(express.static("public"));  //정적 파일 요청 또는 css나 자바스크립트 요청 할수있는지 확인하는 수신 에 대한 요청이 실행
//미들웨어  .static <-정적  ("public") <-공용폴더

app.use(express.urlencoded({extended: false})) //들어오는 데이터를 분석하고 변환 / extended: false ==> 경고를 받지않도록 명시적으로 설정

app.get("/",function(req,res){
    res.render("index"); //render() 은 응답 객체에서 사용되는 메서드이고, 템플릿을 전달하는 명령어 ejs ->HTML로 변환해서 브라우저에 전달
    // const htmlFilePath = path.join(__dirname, "views","index.html"); //경로 지정
    // res.sendFile(htmlFilePath); //html파일을 응답 으로 보낸다 sendFile()
});

app.get("/restaurants",function(req,res){
    const filePath = path.join(__dirname,"data","restaurants.json");  //restaurants.json파일 연결
   
    const fileData = fs.readFileSync(filePath); //파일을 먼저 읽는다 읽어야지 텍스트 파일로 저장가능
    const storedRestaurants = JSON.parse(fileData); //텍스트 내용을 자바스크립트 객체 또는 배열로 변환
 
    res.render("restaurants",{numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
    });//첫번째 매개값 = 경로 두번째 = 그경로안에 변수 (랜더링) == 서버에서 구문 분석되고 반환
    //json파일 안에 있는 데이터갯수 를 파악
});

app.get("/recommend",function(req,res){
    res.render("recommend"); 
    // const htmlFilePath = path.join(__dirname, "views","recommend.html"); //경로 지정
    // res.sendFile(htmlFilePath); //html파일을 응답 으로 보낸다 sendFile()
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
    res.render("confirm");
    // const htmlFilePath = path.join(__dirname, "views","confirm.html"); //경로 지정
    // res.sendFile(htmlFilePath); //html파일을 응답 으로 보낸다 sendFile()
});

app.get("/about",function(req,res){
    res.render("about");
    // const htmlFilePath = path.join(__dirname, "views","about.html"); //경로 지정
    // res.sendFile(htmlFilePath); //html파일을 응답 으로 보낸다 sendFile()
});



app.listen(3000);  //포트번호 3000지정