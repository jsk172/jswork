//const1.html

let current_year = 2023;
current_year = 2022;
console.log(current_year);

const MONTH = 12;
// MONTH = 13; const 재설정 불가

console.log("1년은 " + MONTH + "달이 있습니다.");

// 원의 넓이 계산하기(circleArea = PI*r*r)
const PI = 3.14;
let radius = 4;
let circleArea = PI*radius*radius;

document.write("원의 넓이 : " + circleArea + "<br>");

// 공의 속도를 변환하는 프로그램 작성
// km -> mile, 변환 상수 = 1.609, 1mile = 1.609km
let kph, mph;
const RATE_KPH_MPH = 1.609;

//입력
kph = prompt("공의 속도를 입력하세요(km/h)", "공의속도");
kph = parseFloat(kph) //문자를 실수로 변환.

//연산
mph = kph / RATE_KPH_MPH;
//kph = mph * 1.609;
//출력 - 자리수 설정함수 : toFixed(자리수)
document.write(kph + "km는" + mph.toFixed(2) + "mile 입니다.")