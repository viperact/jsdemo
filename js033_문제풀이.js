/*
[문제1]
아래 배열에서 undefined을 제외한 합계와 평균을 계산하는 프로그램을 구현하세요.

[데이터]
let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];

[출력결과]
합계: 15
평균: 3

*/
let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];

let arr2 = [1, 2, 3];
let arr3 = [4, 5];
let arr4 = [...arr2, ...arr3];
// console.log(arr4);

function getSum(total, num) {
  return total + num;
}
let result = arr4.reduce(getSum);
let result2 = result / arr4.length;
console.log(`합계 : ${result}`);
console.log(`평균 :${result2}`);
/*
 [문제2] 
  2차원 배열의 데이터를 이용해서 합계와 평균을 계산하는 프로그램을 구현하세요.
 [데이타]
 [['홍길동', 90, 85, 40],
  ['이영희', 100, 35, 75]];

  
 <출력결과]
 [[ '홍길동', 90, 85, 40, 215, 71.6' ],
  [ '이영희', 100, 35, 75, 210, 70.00 ]]
  최고점: 71.67
*/
let p1 = ["홍길동", [90, 85, 40]];
// console.log(student);
let student = p1.reduce(function add(total, num) {
  return total + num;
});
console.log(`${student}`);
