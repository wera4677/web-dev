//게임 실행
function startNewGame() {
    if(players[0].name === "" || players[1].name === "") {
        alert("Please set custom player names for both player!")//경고창 메세지 출력
        return;//둘중 하나라도 이름 없으면 여기서 멈춤
    }

    gameAreaElement.style.display = "block"; //게임화면 활성화
}