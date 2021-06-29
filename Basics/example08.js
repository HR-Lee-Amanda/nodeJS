/* ***************   EVENT EMITTER , EVENT LISTENER   *************** */
// EventEmitter 를 상속받으면  Listener 가 될 수 있고 Emitter 는 on(), emit() 메소드 있다.

const util = require('util');
const EventEmitter = require('events').EventEmitter;

var Calc = function(){
    var self = this;

    this.on('stop', function(){
        console.log("Calc에 stop event 전달됨.");
    });
}

util.inherits(Calc, EventEmitter); // Calc 가 EventEmitter 상속받을 수 있도록

Calc.prototype.add = function(a,b) {
    return a + b;
};

process.on('exit', function(){
    console.log("exit 이벤트 발생함.");
});

process.on('tick', function(count) {
    console.log("tick 이벤트 발생함 : %s", count);
}
);

console.log("2초 후에 tick 이벤트 전달 시도함.");
//console.log("5초 후에 시스템 종료 시도함.");

setTimeout(function(){
    process.emit('tick', "hello everyone!");
}, 2000);

/*
setTimeout(function(){
    //console.log("2초 후에 시스템 종료 시도함.");
    process.exit();
}, 5000);
*/

module.exports = Calc;
module.exports.title = 'calculator'; // Calc 객체에 속성 추가
