// console.log("hello javascript");
// console.log("test javascript");

// 대입연산자
let a = 3;
let b = 4;
let sum = 0;

sum = a + b;
console.log(`sum=${sum}`);

let data = 0;
data = data + a;
data += a;

console.log(`data=${data}`);

//연산자의 우선순위
// 단항연산자 > 산술연산자 > 비교연산자 > 논리연산자 > 조건연산자 > 대입연산자

let x = 5;
let y = 8;
let z = 10;
let result = x > y ? x++ : y++; // x가 y보다 크다면 x가 1씩증가, 거짓이라면 y가 1증가
//변수가 false고 y의 산술연산자가 y보다 후순위라 증가되지않은 8이 result에 저장
//저장되고 난 후 ++가 적용되어 증가된 y값 9적용
console.log(`result=${result}, x=${x},y=${y}`);
//result는 증가하지않은값 8이 출력, x와 y값은 조건에따라 변경된값 x=5 y=9출력
