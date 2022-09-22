/*
 문제1
 <프로그램 실행결과>
  주어진 배열에서 3의 배수의 개수=> 6
  주어진 배열에서 3의 배수의 합=> 108
  */

// let a = [];
// a[0] = 10;
// a[1] = 20;
// console.log(a[0]);

let arr = [1, 3, 5, 8, 9, 11, 15, 19, 18, 20, 30, 33, 31];

//
//주어진 arr배열에서 3의 배수를 구해서 리턴하는 함수 정의
function process1(arr) {
  let data = [];
  // console.log(data.length);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0) {
      data[data.length] = arr[i];
    }
  }
  return data;
}
// console.log(process(arr));

//주어진 arr배열에서 3의 배수의 갯수를 리턴하는  함수 정의
function count(process) {
  // console.log(process);
  return process.length;
}

// count(process(arr));

//주어진 arr배열에서 3의 배수 합을 리턴하는 함수 정의
function arrPlus(process) {
  // console.log(process);
  let sum = 0;
  for (let i = 0; i < process.length; i++) {
    sum += process[i];
  }
  return sum;
}

// console.log(process(arr));

let result = process1(arr);
console.log(`주어진 배열에서 3의 배수의 개수=> ${count(process1(result))}`);
console.log(`주어진 배열에서 3의 배수의 합=> ${arrPlus(process1(result))}`);
//오류나는거 process 객체에 1추가

// arrPlus(process(arr));
/*
[문제2]
[출력결과]
javascript
tpircsavaj
javascript
*/

let alpa = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"];

//alpa배열의 요소를  reverse한 후 리턴하는 함수 정의
function reverse(alpa) {
  let data = [];
  // data[data.length] = "t";
  // data[data.length] = "p";
  // data[data.length] = "i";
  // data[data.length] = "r";
  // data[data.length] = "c";
  // data[data.length] = "s";
  // data[data.length] = "a";
  // data[data.length] = "v";
  // data[data.length] = "a";
  // data[data.length] = "j";

  for (let i = alpa.length - 1; i >= 0; i--) {
    data[data.length] = alpa[i];
  }
  return data;
}

//data배열의 출력하는  함수 정의
function display(data) {
  for (let i = 0; i < data.length; i++) process.stdout.write(data[i]);
  process.stdout.write("\n");
  return null; // retrun값 출력이 필요없기 때문에 생략가능
}

display(alpa);
display(reverse(alpa));
display(alpa);
