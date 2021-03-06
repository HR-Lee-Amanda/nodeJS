// 프로토타입 객체는 자바의 클래스 ******************************************
// 함수로 프로토타입 객체 선언
// new 연산자를 통해 인스턴스 객체 생성 가능
// 자바스크립트에서는 함수도 객체, new 연산자로 호출되는 함수를 생성자라고 함
// *************************************************************************

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.run = function(speed) {
        console.log(speed*3+" km 속도로 뛰어갑니다.");
    }
}

Person.prototype.walk = function(speed) {
    console.log(speed+" km 속도로 걸어갑니다.");
}

Person.live = "Everyone dies eventually.";

var person01 = new Person("Alice", 20);
var person02 = new Person("Andy", 22);

person01.sold = 44;
console.dir(person01);

console.log(person01.name + " 객체의 walk(10)을 호출합니다.");
person01.walk(10);
console.log(person02.name + " 객체의 run(10)을 호출합니다.");
person02.run(10);
console.log(Person.live);
//console.log(person01.live); -> undefined