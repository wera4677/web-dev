for (let i = 0; i < 10; i++) { //특정 횟수만큼 실행해야하는 상황일때 사용
    console.log(i);
}


const users = ["Max","Anna","Joel"]; // 요소 3개 3번 반복 

for (const user of users) { //배열 요소만큼 개별로 출력 가능
    console.log(user);
}



const loggedInUser ={
    name: "Max",
    age:32,
    isAdmin:true
};

for (const propertyName in loggedInUser) {
    console.log(propertyName);//키 이름에 연결
    console.log(loggedInUser[propertyName]);//값에 연결 (중요)
}



let isFinished = false;

while(!isFinished) { //조건이 참이면 계속 거짓이면 멈춤
    isFinished = confirm("Do you want to quit?"); //사용자에게 확인 대화 표시
}

console.log("Done!");

