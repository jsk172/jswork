// class_circle.html

function Circle(radius){
    this.radius = radius; //맴버변수, 필드

    //원의 둘레구하는 함수
    this.length = function(){
        return 2 * Math.PI * this.radius;
    }
    this.area = function(){
        return Math.PI * Math.pow(this.radius, 2);
    }
}

let c1 = new Circle(4);
document.write("원의 둘레 : " + c1.length().toFixed(2) + "cm<br>");
document.write("원의 넓이 : " + c1.area().toFixed(2) + "cm<sup>2</sup><br>");
