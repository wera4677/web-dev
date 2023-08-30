//오버레이 여닫기/유효성 검사


function openPlayerConfig (event) { //플레이어 1 클릭했을때 실행되는 코드
    editedPlayer = +event.target.dataset.playerid; //플레이어 구분하기위한 설정  / +"1" => 1 숫자로 변환
    playerConfigOverlayElement.style.display = "block";//보임
    backdropElement.style.display = "block";
    //클릭했을때 오버레이 보이게 설정
}

function closePlayerConfig() { // 플레이어 1 안에 취소 버튼눌렀을때 실행
    playerConfigOverlayElement.style.display = "none"; //숨김
    backdropElement.style.display = "none";
    formElement.firstElementChild.classList.remove("error"); // 에러 스타일 지움
    errorsQutputElement.textContent = ""; //에러 경고창 초기화
    formElement.firstElementChild.lastElementChild.value = "";//입력했던 값 초기화
    //클릭했을때 오버레이 숨김
}

function savePlayerConfig(event) {//플레이어 입력창에 입력후 제출버튼 눌렀을때 실행
    event.preventDefault();//양식제출할때 기본값 방지(알맞은 값이 아니면 페이지 안넘어가짐)
    const formData = new FormData(event.target);//객체 인스턴스화(입력된값 자동으로 추출)
    const enteredPlayerName = formData.get("playername").trim();//playername에 입력된값이 저장되고 trim은 공백을 제거한다 '  Max ' => 'Max'

    if(enteredPlayerName === "")  { //"" 공백은 false로 정의
        event.target.firstElementChild.classList.add("error"); //스타일 추가
        errorsQutputElement.textContent = "Please enter a valid name!"; // 에러 경고창 내용
        return;
    }

    const updatedPlayerDataElement = document.getElementById("player-" + editedPlayer + "-data");//플레이어 1 또는 2에 연결(값에 따라 변경)
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;// 플레이어 이름 저장후 텍스트 변경

   players[editedPlayer - 1].name = enteredPlayerName; //editedPlayer 값이 1이면 [0] 인 배열이고 2면 [1]인 배열이다

   closePlayerConfig();//이름 입력&제출후 창 닫는 함수
    // console.log(enteredPlayerName);
    //input의 name에 연결되어 입력값이 제출되고 입력값 이름으로 설정
}