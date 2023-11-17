// greeting.html
// 콜백함수 기능 - 자기가 부르는 재귀적 용법
// 배열의 인덱스가 1증가하면 인삿말이 2초마다 바뀌게 함.

// window.onload = function(){} {}안에 js파일을 만들면 script src를 위로 올려도 됨. 
let message = ["오늘도 좋은 하루!!", "행운을 빌어요", "잘 지내니?"];
let msgIdx = 0;
myGreeting(); //함수 호출

function myGreeting(){
    let msg = document.getElementById("demo");
    msg.innerHTML = message[msgIdx];
    msg.style.color = "blue";
    msgIdx++;
    if(msgIdx == message.length){
        msgIdx = 0;
    }
    setTimeout(myGreeting, 2000); //myGreeting()호출
}
