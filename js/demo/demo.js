const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

//console.dir(productNameInputElement);

const maxAllowedChars = productNameInputElement.maxLength;
//입력 제한 숫자

function update(event) {
    const enteredText = event.target.value;//값 받기
    const enteredTextLength = enteredText.length;//값의 길이 

    const remainingCharacters = maxAllowedChars - enteredTextLength;
    //max(60)에서 빼기 값의 길이  

    
    remainingCharsElement.textContent = remainingCharacters;
    //브라우저에 표시된 값을 업데이트 
}

productNameInputElement.addEventListener("input",update);



//const sapnElement =document.getElementById("remaining-chars");
//sapnElement.classList.add("");//클래스 추가 삭제는 remove
//sapnElement.className = "";//클래스 추가 (주의:기존에있던 클래스 날려버림)

