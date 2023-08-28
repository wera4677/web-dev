const myName = "Max";


if(myName === "Max") { //Booleans ==> true/false 참과 거짓
    console.log("Hello!");

}

let isLoggedIn = true;


if (!isLoggedIn) {
    console.log("User is not logged in!");
}

const enteredUserName = "Maximilian";

if (enteredUserName.length > 0) {//변수가 비었으면 false  0 도 거짓 처리
    console.log("Input is valid!");
}
 


//==는  5 == "5" true 값만 비교
// ===는 5 === "false" 타입까지 비교한다!
// != 과 !== 은  위와 같음



//for = 기본적으로 특정 코드 실행횟수 정의가능
//for of = 배역의 모든 요소를 순환한 다음 모든 배열요소로 작업 가능
//for in = 객체의 모든 속성을 반복할수있음
//while = 특정 횟수를 정의 하지않고 불리언 값으로 특정 조건이 될때 까지 수행