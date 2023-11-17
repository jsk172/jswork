// 시계 생성
setInterval(myWatch, 1000);

function myWatch(){
    const now = new Date();
    let time = now.toLocaleTimeString();
    console.log(time);

    let watch = document.getElementById("show")
    if(now.getHours() <= 12){
        watch.innerHTML = time.replace("오전", 'am');
    }else{
        watch.innerHTML = time.replace("오후", 'pm');
    }
    watch.style.color = "blue";
}