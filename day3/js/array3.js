// array3.html

// 1~10 자연수를 배열에 저장
// 10개의 길이를 가진 배열 생성
let number = new Array(10);
console.log(number.length);

for(let i=0; i<number.length; i++){
    number[i] = i+1;
}

for(let i in number){
    document.write(number[i] + " ");
}
document.write("<br>")
// 알파벳 대문자를 저장 - 26개
let alphabet = new Array(26);
let ch = 'A';
ch = ch.charCodeAt(0); //코드값으로 다시 저장

for(let i=0; i<alphabet.length; i++){
    alphabet[i] = ch;
    ch++;
}
for(let i in alphabet){
    document.write(alphabet[i] + ". " + String.fromCharCode(alphabet[i]) + "<br>");
}

let ch1 = 'ABC';
ch1 = ch1.charCodeAt(2);
document.write(ch1);