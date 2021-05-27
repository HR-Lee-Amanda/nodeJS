var calc = {};
calc.add = function(a, b) {
    return a + b;
}

console.log("(2) 모듈로 분리되기 전 - calc.add 함수 호출 결과 : %d", calc.add(10, 5));

module.exports = calc;
