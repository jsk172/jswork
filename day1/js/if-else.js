// if-else.html

// 단독 if문
// if ~ else문

// 속도를 입력받아 속도위반을 판정하는 프로그램
let limit_speed = prompt("속도를 입력하세요 : ");

/*
if(limit_speed >= 50){
    document.write("안전속도 위반입니다. 과태료 10만원 부과대상<br>");
}
document.write("시속 " + limit_speed + "km입니다.")
*/

if(limit_speed == null){
    document.write("입력이 취소되었습니다.");
}else{
    if(limit_speed >= 50){
        document.write("안전속도 위반입니다. 과태료 10만원 부과대상<br>");
    }else{
        document.write("안전 속도 준수<br>");
    }
}
document.write("시속 " + limit_speed + "km입니다.");