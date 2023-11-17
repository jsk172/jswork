// imageslide.html

window.onload = function(){ // scrpit src가 위에있어도 실행되게 해줌
    let picture = ["images/cup-1.jpg", "images/cup-2.jpg", "images/cup-3.jpg"];
    let picIdx = 0;

    showSlide();

    function showSlide(){
        document.getElementById("pic").src = picture[picIdx];
        picIdx++;

        if(picIdx == picture.length){
            picIdx = 0;
        }
        setTimeout(showSlide, 2000);
    }
}