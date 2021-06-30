/* ************ FILE SYSTEM **************** */
/* 한 번에 읽거나 한 번에 쓰는 과정 */

const fs = require('fs');

var temp = "Not yet!";

temp = fs.readFileSync('../package.json', 'utf8', //function(err, data){
    /*if (err){
        console.log(err);
    }
    //temp = data;
    temp = "After reading the file... \n" + data;
    //console.log(temp);
}*/);
temp = "After reading the data...\n" + temp;

console.log("프로젝트 폴더 안의 package.json 파일을 읽도록 요청했습니다.");

fs.writeFile('./example10_output.txt', temp, function(err) {
    if (err) {
        console.log(err);
    }
    console.log('example10_output.txt 파일에 데이터 쓰기 완료');
});