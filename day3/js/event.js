// showhideevent.html

function showText(){
    // document.getElementById("detail").style.display = "block";
    // document.getElementById("show").style.display = "none";
    let text = document.getElementById("detail");
    text.style.display = "block";

    let showBtn = document.getElementById("show");
    showBtn.style.display = "none";

}

function hideText(){
    // document.getElementById("detail").style.display = "none";
    // document.getElementById("show").style.display = "block";
    let text = document.getElementById("detail");
    text.style.display = "none";
    let showBtn = document.getElementById("show");
    showBtn.style.display = "block";
}
