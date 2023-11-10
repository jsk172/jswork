// calc_age.html

// 나이계산 프로그램
// wrtie() - getelementbyid 사용
function calcAge(){
    // 조건 : 현재 연도는 상수로 선언할 것
    // 나이 = 현재년도 - 태어난해
    const YEAR = 2023;
    let birth = prompt("태어난 해를 입력하세요 : ");
        
    if(birth == null){
        document.getElementById("print").innerHTML = "입력이 취소되었습니다.";
    }else if(isNaN(birth)){
        document.getElementById("print").innerHTML = "숫자를 입력하세요.";
    }else{
        birth = parseInt(birth);
        let age = YEAR-birth;
        
        document.getElementById("print").innerHTML = YEAR+"년 현재<br>";
        document.getElementById("print2").innerHTML = birth+"년에 태어난 사람의 나이는 " + age + "세 입니다";
    }
}