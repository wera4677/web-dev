//DOM은 html코드 분석해서 데이터와 브라우저의 내부 표현을 설명해주는역할
//노드 는 계층적 구조를 저장
// alert();// == window.alert();

//console.dir(document);//console.dir(document)은 document 내용 보여주는명령어

//계층적으로 파고들어서 요소를 찾는방법
//document.body.children[1].children[0].href = "https://google.com"; 

//html의 id를 사용해서 요소찾는방법
let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";//주소변경


//css선택자를 사용하여 요소찾는방법
document.querySelector("#external-link"); // p a { color: rgb;}
anchorElement.href = "https://google.com";

//------------------------------------------------------
//!!!!! 요소 추가하기!!!!
//1.새로운 요소 만들기
let newAnchorElement = document.createElement("a"); //요소 만들기 앵커요소
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to Google!";

//부모요소부터 접근
let firstParagraph = document.querySelector("p");//p의 단락 연결

//3.부모 요소에 새롭게 요소 추가
firstParagraph.append(newAnchorElement);//p 단락에 a(앵커)요소 추가

//-----------------------------------------------------
//요소 삭제하기!!!!
//1.빼야할 요소 선택하기
let firstH1Element = document.querySelector("h1");//h1에 연결

//2.요소삭제
firstH1Element.remove();//옛날 브라우저에서 작동 안할수있음
//firstH1Element.parentElement.removeChild(firstH1Element);//옛날브라우저에서 사용

//-------------------------------------------------
//요소 이동시키기
firstParagraph.parentElement.append(firstParagraph);


//innerHTML 

console.log(firstParagraph.innerHTML); //내가 js에서 설정한 html을 모두 보여줌

firstParagraph.innerHTML = "Hi! This is <strong>important!</strong>.";
//텍스트와 요소를 섞어서 하고싶을때 사용

