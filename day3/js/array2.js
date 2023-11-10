// array2.html

let num = new Array();
console.log(num);
console.log(num.length + "개");

// 저장
num[0] = 10;
num[1] = 20;
num[2] = 30;

console.log(num);
//특정 요소 1개 조회
console.log(num[0]);

//전체 요소 검색
for(let i=0; i<num.length; i++){
    document.write(num[i] + " ");
}

//연산
console.log(num[1] - num[2]);
console.log(num[1] <= num[2]);

//합계 및 평균
let sum = 0;
for(let i=0; i<num.length; i++){
    sum += num[i];
    document.write("<br>" + sum);
}
avg = sum / num.length;
console.log(sum);
console.log(avg);