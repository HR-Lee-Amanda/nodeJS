const calc1 = require('./example02'); // 내가 만든 모듈
const calc2 = require('./example03'); // 내가 만든 모듈
const os = require('os'); // 내장 모듈 : 시스템 정보를 알려주는 모듈
const path = require('path'); // 내장 모듈 : 파일의 경로를 다루는 모듈

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
/*
console.log("시스템의 hostname : %s", os.hostname());
console.log("시스템의 메모리 : %d / %d", os.freemem, os.totalmem());
console.log("시스템의 CPU 정보");
console.dir(os.cpus());
console.log("시스템의 네트워크 인터페이스 정보");
console.log(os.networkInterfaces());

console.log("************************************************");
*/

var directories = ["users", "mike", "docs"];
var docsDirectory = directories.join(path.sep);
console.log("문서 디렉터리 : %s", docsDirectory);

var curPath = path.join("/Users/mike", 'notepad.exe');
console.log('파일 패스 : %s', curPath);
var filename = "C:\\Users\\mike\\notepad.exe";
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);
console.log("디렉터리 : %s, 파일 이름 : %s, 확장자 : %s", dirname, basename, extname);

console.log("************************************************");