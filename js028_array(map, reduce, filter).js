//js028_array.js 배열
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
//JavaScript Array 클래스는 리스트 형태의 고수준 객체인 배열을 생성할 때 사용하는 전역 객체입니다.

let scores = [100, 90, 100]; //배열을 나타내는 []
console.log(scores);
//[ 100, 90, 100 ] Array(3)

console.log(scores[0]); //100
console.log(scores[1]); //90
console.log(scores[2]); //10
console.log(scores[3]); //undefined = 지정된 index값이 없다면 / java 에선 오류발생
console.log(scores.length); //3 index의 갯수

let person = ["John", "Doe", 26, true]; //js 는 종류별로 묶을 수 있음
for (let idx in person) {
  console.log(person[idx], typeof person[idx]);
}
/*
John string
Doe string
26 number
true boolean
*/

let student = ["홍길동", [100, 90, 20]];
for (let idx in student) {
  console.log(student[idx], typeof student[idx]);
}
/*
홍길동 string
[ 100, 90, 20 ] object
*/

let cars = new Array("Sasb", "Volvo", "BMW"); // = casrs=[]
for (let idx in cars) {
  console.log(cars[idx], typeof cars[idx]);
}
/*
Sasb string
Volvo string
BMW string
*/

let color = []; //0 / let color = []; 값이 없음
console.log(color.length);

color[0] = "red";
console.log(color.length); // 1 / 인덱스값을 정해서 추가 가능

color.push("green");
console.log(color.length); // 2 / push : 현재 저장된 인덱스 다음으로 인덱스를 지정해줌

color.push(759);
console.log(color.length); // 3 / push

color[8] = "blue";
console.log(color.length); // 9
console.log(color); //[ 'red', 'green', 759, <5 empty items>, 'blue' ]

for (let idx in color) {
  console.log(`${idx} : ${color[idx]}`);
}
/*
0 : red
1 : green
*/

let point = new Array(3); // new Array(3): 3개의 크기를 가진 배열을 생성
console.log(`point length : ${point.length}`); //point length : 3

let shape = new Array(10, 20); // new Array(10, 20) : 2개의 요소를 가진 배열을 생성하고 각 요소에 10, 20을 할당
console.log(shape.length); //2 (배열수)
for (let idx in shape) {
  console.log(`${idx} : ${shape[idx]}`);
}
/*
각 배열에 할당된 요소
0 : 10
1 : 20
*/

shape[2] = 50; // [2]번쨰 배열에 50요소 추가
console.log(shape[1]); // [1]에대한 요소 가져오기
console.log(shape.length); // 배열 갯수 조회

/*
for()문에서의 용도
for idx in 배열 ;
for - in : index를 가져옴
for - of : elemet를 가져옴 (요소)
*/

//forEach() : 배열 *'전용'* 메소드
//배열.forEach(function(element[, index] ){수행할 문장}}); / index는 생략가능
shape.forEach(function (element, index) {
  console.log(`${index} : ${element}`);
});
/*
0 : 10
1 : 20
2 : 50
*/

shape.forEach((element, index) => {
  console.log(`${index} : ${element}`);
});
/*
화살표 함수로 변경
0 : 10
1 : 20
2 : 50
*/

// let chocie = "javascript";
// chocie.forEach(function (element, index) {
//   console.log(`${element} : ${index}`);
// });
/* TypeError: chocie.forEach is not a function 
문자열은 forEach()를 제공하지 않으므로 사용할 수 없다
'[]' 배열에게만 사용가능
*/

////////////////////////////////////중요///////////////////////////////////

//배열명.map(callback);
const numbers = [4, 9, 16, 25];
const res = numbers.map(function (element, index) {
  return element * 2;
});
console.log(`res : ${res}`);
//res : 8,18,32,50

const sqt = numbers.map(Math.sqrt);
console.log(`sqt : ${sqt}`);
//sqt : 2,3,4,5

function getSum(total, num) {
  //total : 누적, num : 배열에 저장되는 요소
  return total + num;
}

//배열.reduce() : 배열 안 요소의 값을 다 더해서 출력해줌
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const sum = numbers.reduce(getSum); //위의 함수식을 getSum에 대입가능
console.log(`sum : ${sum}`);
//sum : 54

//배열.filter() : 논리값에서 true인것만 배열에서 가져옴
const ages = [32, 33, 16, 40];
const per = ages.filter(function (element, index) {
  return element >= 18;
});

console.log(`per : ${per}`);
//per : 32,33,40
