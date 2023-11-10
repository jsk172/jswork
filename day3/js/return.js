// function_return.html

//return이 있는 함수

// 제곱수를 계산하는 함수
// 어떤 수를 입력받아 제곱하는 함수
/*
function square(x){
    return x*x;
}*/
/*
function add(x, y){
    return x+y;
}*/

let square = function(x){
    return x*x;
}

let add = function(x, y){
    return x+y;
}

console.log(square(5));
console.log(add(3,3));

let result = add(1,5);
console.log(result);