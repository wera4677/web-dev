let paragraphElement = document.querySelector("p");

function changeParagraphText(event) { //p 단락 텍스트를 "Clicked!"로 변경하는 함수 생성
    paragraphElement.textContent = "Clicked!";
    console.log("paragraph Clicked!");
    console.log(event);//이벤트 발생한것을 설명을 보여줌
}

paragraphElement.addEventListener("click",changeParagraphText); //이벤트 리슨 추가
//매개변수에 "클릭"이라는 매개변수를 넣고 두번째 매개변수에 함수를 넣는다
//두번째 매개변수 함수 에는 ()을 넣지 않는다 넣으면 바로 실행되버린다

let inoutElement =document.querySelector("input");

function retrieveUserInput(event) {
    let enteredText = inoutElement.value;
    //let enteredText = event.target.value;
    //텍스트에 입력하면 그값이 js에 기록된다
    //let enteredText = event.data;//입력한 값을 차례대로 보여줌
    console.log(enteredText);
   // console.log(event); //이벤트 발생한것을 설명을 보여줌
}

inoutElement.addEventListener("input",retrieveUserInput);

