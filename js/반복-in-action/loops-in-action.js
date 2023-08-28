//1번  버튼 클릭했을때 입력한 숫자만큼 더해서 값이 나오게 하는 기능

const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum() {
    const userNumberElement = document.getElementById("user-number");
    const enteredNumber = userNumberElement.value;

    let sumUpToNumber = 0;

    for (let i = 0; i <= enteredNumber; i++) {
        sumUpToNumber = sumUpToNumber + i;
    }
    
    const outputResultElement = document.getElementById("calculated-sum");

    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = "block";
}


calculateSumButtonElement.addEventListener("click",calculateSum);



//2번  클릭했을때 요소 강조하기

const highlightButtonElement = document.querySelector("#highlight-links button");

function highlightLinks() {
    const anchorElements = document.querySelectorAll("#highlight-links a"); //a 요소 모두

    for (const anchorElement of anchorElements) {
        anchorElement.classList.add("highlight");
        //앵커 배열 만큼 반복하고 css의 스타일 효과 나타냄
    }

}

highlightButtonElement.addEventListener("click",highlightLinks);




//3번 딕셔너리에 저장되있던 데이터 표시

const userDataElement = {
    firstName:"Max",
    lastName: "Schwarzmuller",
    age:32
};

const displayUserDataButtonElement = document.querySelector("#user-data button");

function displayUserData (){
    const outputUserData = document.getElementById("output-user-data");

    outputUserData.innerHTML = "";//초기화

    for (const key in userDataElement) {
        const newUserData = document.createElement("li");
        const outputText = key.toUpperCase() + ":" + userDataElement[key]; //문자열을 모두 대문자로 표시
        newUserData.textContent = outputText;
        outputUserData.append(newUserData);
    }

}

displayUserDataButtonElement.addEventListener("click",displayUserData);






//4 주사위 굴리기 (존~나 어려움 모르겠음) 영상 p.305

const rollsDiceButtonElement = document.querySelector("#statistics button");

function rollDice() { //무작위 숫자코드를 명확하게 구분 하는 기능
    return Math.floor(Math.random() * 6) + 1;//Math.floor() = 내림 5.64 => 5
}

function deriveNumberOfdiceRolls () {//리스트 항목을 출력하는 기능
    const targetNumberInputElement = document.getElementById("user-target-number");
    const diceRollsListElement = document.getElementById("dice-rolls");

    const enteredNumber = targetNumberInputElement.value;//입력 한 값
    diceRollsListElement.innerHTML = "";

    let hasRolledTargetNumber = false;
    let numberOfRolls =0;
    
    while (!hasRolledTargetNumber) {
       const rolledNumber = rollDice();
       
    //    if(rolledNumber == enteredNumber) {
    //     hasRolledTargetNumber =true;
    //    }
        numberOfRolls = numberOfRolls +1;
        const newRollListElement = document.createElement("li");
        const outputText = "Roll " + numberOfRolls + ":" + rolledNumber;
        newRollListElement.textContent = outputText;
        diceRollsListElement.append(newRollListElement);
         hasRolledTargetNumber = rolledNumber == enteredNumber;
    }

    const outputTotalRollsElement = document.getElementById("output-total-rolls"); //x 값
    const outputTargetNumberElement = document.getElementById("output-target-number");//y 값

    outputTargetNumberElement.textContent =enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
}

rollsDiceButtonElement.addEventListener("click",deriveNumberOfdiceRolls);