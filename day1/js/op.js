// operator.html
let num1 = 8, num2 = 5;
let result;

/*
// 산술
result = num1 + num2;
console.log(result);

result = num1 - num2;
console.log(result);

result = num1 * num2;
console.log(result);

result = num1 / num2;
console.log(result);

result = num1 % num2;
console.log(result);
*/


// 비교
result = num1 > num2;
console.log(result);
console.log(typeof(result));

result = num1 == num2;
console.log(result);

result = num1 != num2;
console.log(result);

// 논리연산
result = (num1 == num2) && (num1 >= num2);
console.log(result);

result = (num1 == num2) || (num1 >= num2);
console.log(result);

result = !(num1 == num2);
console.log(result);

// 조건연산
result = (num1<num2) ? 'T' : 'F';
console.log(result);

// 짝수/홀수 판정
result = (num1 % 2 == 0) ? '짝수' : '홀수';
console.log(result);
// alert('판정결과 : ' + result);
document.write("<span class='acess'>판정결과 : " + result + "</span>");