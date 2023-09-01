//초기화 하고 게임시작
//연결 작업
//오버레이 : 숨겨진 스타일
const gameData = [ 
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

let editedPlayer = 0; // 1 과 2 의 플레이어 구분하기위한 변수
let activePlayer = 0; //players 의 배열에 연결하기위한 변수
let currentRound = 1; //무승부 라운드
let gameIsOver = false;

const players = [ 
    {
        name: "",
        symbol: "X" 
    },
    {
        name: "",
        symbol: "O" 
    },
];

const playerConfigOverlayElement = document.getElementById("confug-overlay");//이름입력 오버레이
const backdropElement = document.getElementById("backdrop");//까만배경 오버레이
const formElement = document.querySelector("form");//플레이어 입력창 
const errorsQutputElement = document.getElementById("config-errors");//유효성 에러창 연결
const gameAreaElement = document.getElementById("active-game");//게임 화면 연결
// const gameFieldElements = document.querySelectorAll("#game-board li");//ALL을 사용하여 모든 것을뜻함
const gameBoardElement = document.getElementById("game-board");//ol 에 연결
const activePlayerNameElement = document.getElementById("active-player-name"); //게임 플레이어 차례 스팬 연결
const gameOverElement = document.getElementById("game-over");//게임끝 메세지


const editPlayer1BtnElement = document.getElementById("edit-player-1-btn"); //플레이어 1 버튼 연결
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");//플레이어 2 버튼 연결
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");//취소버튼 연결
const startNewGameBtnElement = document.getElementById("start-game-btn"); //스타트버튼 연결




editPlayer1BtnElement.addEventListener("click",openPlayerConfig);
editPlayer2BtnElement.addEventListener("click",openPlayerConfig);

cancelConfigBtnElement.addEventListener("click",closePlayerConfig);
backdropElement.addEventListener("click",closePlayerConfig);

formElement.addEventListener("submit",savePlayerConfig); //submit제출 이벤트

startNewGameBtnElement.addEventListener("click", startNewGame); //게임활성화 이벤트

// for (const gameFieldElement of gameFieldElements) {//li 배열 반복문
//     gameFieldElement.addEventListener("click" ,selectGameField ); 
// }

gameBoardElement.addEventListener("click", selectGameField );

