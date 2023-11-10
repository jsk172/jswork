//배열 사용
let animal = []; //빈 배열 생성
console.log(animal);
console.log(animal.length + "개");

//입력(저장)
animal[0] = 'cow';
animal[1] = 'pig';
animal[2] = 'horse';
animal[3] = 'cat';
console.log(animal);

//확정 요소(값)를 조회(검색)
console.log(animal[1]);

//수정(변경)
animal[2] = 'dog';
//삭제
delete animal[0];

//전체 요소(값) 조회(목록)
for(let i=0; i<animal.length; i++){
    document.write(animal[i] + " ");
}