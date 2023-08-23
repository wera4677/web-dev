let age = 32;
let userName = "Max"; //텍스트가 길어서 줄바꿈 하고싶을때 `` 사용 또는 ""+""사용한다
let hobbies = ["Sports", "Cooking", "Reading"]; //배열값 저장공간(여러값 저장가능)
let job = {
  title: "Developer",
  place: "New York",
  salary: 50000,
}; //키: 값

let totaladultYear;

function calculateAdultYears(userAge) {//매개변수 = 함수안에 투입되는 변수이름
   return userAge - 18; //let 을 안에서 정의 해버리면 함수 안에서만 사용가능 "참조에러"뜸
  
}

totaladultYear = calculateAdultYears(age);
alert(totaladultYear);

age = 45;
totaladultYear = calculateAdultYears(age);

alert(totaladultYear);

// let greetingText = "Hi, my name is/' Max!!!/'"; //변수 정의 let
// alert(greetingText); //    경고창 띄우는 명령어 alert
