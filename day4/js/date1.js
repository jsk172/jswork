// date.html
// Date 객체(날짜와 시간)
const NOW = new Date();
document.write("현재 년도 : " + NOW.getFullYear()+"<br>");
document.write("현재 월 : " + (NOW.getMonth()+1) + "<br>");
document.write("현재 일 : " + NOW.getDate() + "<br>");


document.write("현재 " + NOW.getHours() + "시 ");
document.write(NOW.getMinutes() + "분 ");
document.write(NOW.getSeconds() + "초");

// 현재까지의 시간 측정(1970.1.1) 지점부터 밀리초 반환
document.write("현재까지의 시간 : " + NOW.getTime()/1000 + "<br>");
document.write("날(일)로 환산 : " + Math.floor(NOW.getTime()/(24*60*60*1000)) + "<br>");