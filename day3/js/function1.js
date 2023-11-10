// function1.html

// 함수 정의
// 매개변수(입력)가 없는 함수
function sayHello(){
    document.write("안녕하세요.<br>");
}
// 매개변수가 있는 함수 - 입력
function sayHello2(name){
    document.write("안녕?" + name + "<br>");
}
// 구구단을 출력하는 함수 정의
function gugudan(dan){
    document.write(dan+"단<br>");
    for(let i=1; i<=9; i++){
        document.write(dan + " x " + i + " = " + dan*i + "<br>");
    }
}

// 함수 사용 - 호출
sayHello();
sayHello2("지성");
gugudan(4);