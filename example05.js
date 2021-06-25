function add(a, b, callback) {
    var result = a + b;
    callback(result);

    var count = 0;
    // count 변수는 add 함수 내에서 만들어진 변수이지만 add 내의 함수인 history에서는 계속 접근 가능 -> 클로저
    var history = function(){
        count++;
        return count + ' : ' + a + ' + ' + b + ' = ' + result;
    }
    return history;
}
var add_history = add(10, 10, function(result){
   // console.log("더하기 (10, 10) 의 결과 : %d", result);
    console.log("파라미터로 전달된 콜백 함수 호출됨.");
    console.log("더하기 (10, 10) 의 결과 : %d", result);
}) 

console.log("결과 값으로 받은 함수 실행 결과 : "+add_history());
console.log("결과 값으로 받은 함수 실행 결과 : "+add_history());
console.log("결과 값으로 받은 함수 실행 결과 : "+add_history());