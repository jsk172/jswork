//key_repeat1.html
while(true){
    let key = prompt("key를 눌러주세요 : ","y or n");
    if(key == 'y' || key=='Y'){
        alert("계속 반복합니다.");
    }else if(key == 'n' || key=='N'){
        alert("반복을 중단합니다.")
        break;
    }else{
        alert("지원하지 않는 키 입니다.")
    }
}
document.write("프로그램 종료.");