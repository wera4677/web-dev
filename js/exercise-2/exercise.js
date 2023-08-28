// 배운 것을 연습하세요!

// 1) 2개의 <버튼> 요소를 선택하여 서로 다른 2개의 변수에 저장합니다.
//    - "id"를 추가하거나 사용하지 않고 첫 번째 버튼을 선택합니다
//    - "id"를 사용하여 두 번째 버튼을 선택합니다
const firstButtonElement = document.querySelector("button");
const secondButtonElement = document.getElementById("but");


// 2) 두 버튼 모두에 "클릭" 이벤트 수신기를 추가합니다(두 가지 다른 기능 포함).
//    이 기능은 클릭한 버튼을 "console.dir()"로 표시해야 합니다.
//    - 저장된 변수를 사용하여 첫 번째 버튼 출력
//    - 저장된 변수를 사용하지 않고 두 번째 버튼을 출력합니다
// function removeParagraph() {
//     console.dir(firstButtonElement);
// }

// firstButtonElement.addEventListener("click",removeParagraph);

// function changeColor(event) {
//     console.dir(event.target);//event는 매개변수 값을 자동으로 가져와줌

// }
// secondButtonElement.addEventListener("click",changeColor);
//----------------------------------------------------------------------

// 3) 이제 페이지에 보이는 텍스트에 언급된 단락을 선택하여 저장합니다
//    (첫 번째 및 세 번째 단락)
//    - 문서에 구멍을 내고 "이동"하여 두 문단을 모두 선택합니다
//      언급된 요소들
//    - DOM 시추에 어려움을 겪는다면, 대신 "ids"를 사용하되 해결책을 지켜보세요!

const firstParagraphElement = document.body.children[2].children[1]; //섹션의 첫번째 단락 저장
console.log(firstParagraphElement);

const thirdParagraphElement = document.body.children[2].children[3]; //섹션의 세번째 단락 저장
console.log(thirdParagraphElement);

// 4) (2)에서 다음과 같이 기능을 변경합니다:
//    - 첫 번째 버튼을 누르면 세 번째 단락(즉, 앞의 <p>)이 삭제됩니다
//    - 두번째 버튼을 누르면 첫번째 단락의 배경색이 파란색으로 바뀝니다
function removeParagraph() {
    thirdParagraphElement.remove();//세번째 단락 삭제
}

firstButtonElement.addEventListener("click",removeParagraph);

function changeColor(event) {
    //firstParagraphElement.style.backgroundColor = "blue";
    //js로 css 바꾸는 명령    변수이름.style.(명령) = (값)

    //firstParagraphElement.className = "blue-bg";
    //css의 클래스를 지정하여 스타일 변경할수있다.
    firstParagraphElement.classList.add("blue-bg");
}
secondButtonElement.addEventListener("click",changeColor);


// 5) CSS 클래스 추가뿐만 아니라 "인라인 스타일"을 변경하여 (4) 해결
//    참고: 먼저 style.css 파일에 해당 클래스를 추가해야 합니다!