exports.add = function(a, b) {
    return a + b;
}

console.log("(3) 모듈로 분리되기 전 - calc.add 함수 호출 결과 : %d", this.add(10, 20));