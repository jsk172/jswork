//variable.html
/* 
?학생은 ?학년 ?반 입니다. 
document.write()
변수이름에 예약어(if, class,for 등)는 사용불가
*/

var sName = "우영우";
var sGrade = 3;
var sClass = 4;

//출력
// document.write(sName, sGrade, sClass, "<br>");
// document.write(sName + "학생은 " + sGrade + "학년 " + sClass + "반 입니다.");

//콘솔출력
// console.log("이름 : " + sName);
// console.log("학년 : " + sGrade);
// console.log("반 : " + sClass);

// charset(문자셋) 연습
var ch1 = 65;
console.log(ch1);
console.log(String.fromCharCode(ch1));

var ch2 = 'B';
console.log(ch2);
console.log(ch2.charCodeAt(0));

// 유니코드
let ch3 = '가';
document.write(ch3);
console.log(ch3);
console.log(ch3.charCodeAt(0));