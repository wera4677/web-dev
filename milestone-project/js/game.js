//게임 실행
function resetGameStatus() { // 게임 시작 버튼을 누루면 초기화 시키기
    activePlayer = 0;
    currentRound = 1;
    gameOverElement.firstElementChild.innerHTML = 
    'You won, <span id="winner-name">PLAYER NAME</span>!';
    gameOverElement.style.display = "none";//승리자 판결 메세지 숨김

    let gameBoardIndex = 0;
    for(let i = 0; i < 3; i++){//게임 데이터 항목 초기화
        for(let j = 0; j < 3; j++) {
            gameData[i][j] = 0; //[0][0] ~ [2][2]까지 0 으로 초기화
            const gameBoardItemElement =  gameBoardElement.children[gameBoardIndex];
            gameBoardElement.children[gameBoardIndex].textContent = "";
            gameBoardItemElement.classList.remove("disabled");
            gameBoardIndex++;
        }
    }
}


function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player names for both player!"); //경고창 메세지 출력
    return; //둘중 하나라도 이름 없으면 여기서 멈춤
  }

  resetGameStatus();

  activePlayerNameElement.textContent = players[activePlayer].name; //플레이어 이름 업데이트
  gameAreaElement.style.display = "block"; //게임화면 활성화
}

function switchPlayer() {
  //플레이어 전환 할수있는 함수
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name; //턴 마다 이름 바꿈
}

function selectGameField(event) {
  //몇번째 li인지 O,X 둘중 무엇인지 판단
  if (event.target.tagName !== "LI") {
    return;
  }

  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1; // li의 데이터에 연결
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    //필드에 값이 할당되면 재할당 못하게 함
    alert("Please select an empty field!");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol; //배열에 따라 X또는O 판별
  selectedField.classList.add("disabled"); //하버 효과 사라지게 만듬

  gameData[selectedRow][selectedColumn] = activePlayer + 1; //게임판에 어디에 어떤플레이어가 데이터저장했는지 확인후 변경

  const winnerId = checkForGameOver();
  
  if(winnerId !== 0){
    endGame(winnerId);
  }

  currentRound++;
  switchPlayer(); //플레이어 전환

  //배열을 가져와서 처음 설정된 0 이면 x심볼을 가져오고 하버효과 사라짐 그리고 플레이어 전환하는 함수 발동
}

function checkForGameOver() {
  for (let i = 0; i < 3; i++) {
    //열이 같은지 확인
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0]; //플레이어 id 가 승리조건을 만족하면 플레이어 id 반환
    }
  }

  for (let i = 0; i < 3; i++) {
    //행이 같은지 확인
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i]; //플레이어 id 가 승리조건을 만족하면 플레이어 id 반환
    }
  }

  //오른쪽 하단 대각선 조합
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  //왼쪽 하단에서 오른쪽 상단 대각선 조합
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1; //무승부 신호
  }
  return 0;
}

function endGame(winnerId) {
  gameOverElement.style.display = "block";

  if (winnerId > 0) { //승자 판단 플레이어 1 또는 2
    const winnerName = players[winnerId - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
  } else { //무승부 메세지
    gameOverElement.firstElementChild.textContent = "It\'s a draw!"; //게임끝 메세지 를 바꾼다
  }
}

