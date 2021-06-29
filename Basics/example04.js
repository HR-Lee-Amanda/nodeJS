/*
************ 자바스크립트의 객체와 함수, 배열에 관한 예시 
*/

var Person = {};  // ,자바스크립트의 객체

// 각 속성으로의 접근 
Person['age'] = 20;
Person['name'] = "Amanda";
Person.mobile = "010-4321-4945";
var oper = function(a,b){return a + b;};
Person.add = oper;

console.log("age : "+Person.age);
console.log("name : "+Person.name);
console.log("mobile : "+Person["mobile"]);
console.log(Person.add(3,4));

console.log("************************************************");
console.log("************************************************");

var Person2 = {
    age : 23,
    name : "Alice",
    multiply : function(a,b){
        return a*b;
    }
};

Person2.mobile = "010-5932-2954";
console.dir(Person2);
console.log("age : "+Person2.age);
console.log("name : "+Person2.name);
console.log("mobile : "+Person2["mobile"]);
console.log(Person2.multiply(3,4));

console.log("************************************************");
console.log("************************************************");

var Users = [Person, Person2];
Users.push({
    name : "Frogy",
    age : 30,
    mobile : "010-3432-5932"
});
console.log("# of users : %d", Users.length);
console.log(Users[1]);
Users.push(function(a,b){ // 배열의 요소로 함수 입력
    if (a >= b) return a;
    else return b; 
});
console.log("# of users : %d", Users.length);
for (var i = 0; i < Users.length; i++){
    console.dir(Users[i]);
}
// 네번째 요소인 함수 실행
console.log("function call : "+Users[3](17,14));
Users.forEach(function(item, index){
    console.log("배열 요소 # %d : %s", index, item.name);
});

console.log("************************************************");
console.log("************************************************");

var Arr = [
    "Alice","Amy", "Andy", "Annie", "Alex", "Poo"
]
Arr.push("Frogy");
Arr.forEach(function(item, index){
    console.log("Arr index %d : %s", index, item);
});
Arr.pop();
Arr.forEach(function(item, index){
    console.log("Arr after pop index %d : %s", index, item);
});
Arr.unshift("Frogy");
Arr.forEach(function(item, index){
    console.log("Arr after unshift index %d : %s", index, item);
});
Arr.shift();
Arr.forEach(function(item, index){
    console.log("Arr after shift index %d : %s", index, item);
});
/* 배열 요소의 갯수는 그대로이고 해당 인덱스는 undefined 처리
delete Arr[2];
Arr.forEach(function(item, index){
    console.log("Arr after delete index number 2 index %d : %s", index, item);
});
*/
Arr.splice(2,1);
Arr.forEach(function(item, index){
    console.log("Arr after splice index number 2 index %d : %s", index, item);
});
Arr.splice(2,0,"Andy", "Anna");
Arr.forEach(function(item, index){
    console.log("Arr after splice index number 2 Andy, Anna index %d : %s", index, item);
});
var subArr = Arr.slice(2,4); // 2번 인덱스부터 3번까지, 2만 인수로 주는 경우 2부터 끝까지
subArr.forEach(function(item, index){
    console.log("subArr index %d : %s", index, item);
});
