const calc1 = require('./example02');
const calc2 = require('./example03');

//console.log("new start");
//console.log("Decimal Integer : %d", 11);
//console.log("JSON format : %j", {name : "Amanda"});

var var1 = {name : "HyeRim Lee",
            age : 23,
            level : "Junior",
            future_job : "Computer Scientist"
} 

console.dir(var1); // 객체를 출력 (console 은 전역 객체)

console.log("************************************************");

console.log("현재 실행한 파일의 이름 : %s", __filename); // __filename 은 전역변수
console.log("현재 실행한 파일의 패스 : %s", __dirname);  // __dirname 은 전역변수

console.log("************************************************");

console.log("argv 속성의 파라미터 수 : " + process.argv.length); // procss 객체는 전역 객체
console.dir(process.argv);                                      // argv는 배열 객체 ( [] 대괄호로 표현 )
if (process.argv.length > 2) {
    console.log("세 번째 파라미터의 값 : %s", process.argv[2]);
}
process.argv.forEach(function(item, index) {
    console.log(index + " : " + item);
});

console.log("************************************************");
console.log(calc1.add(3,4));
console.log(calc2.add(4,5));
console.log("************************************************");