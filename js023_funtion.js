//js023_funtion.js
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions#%ED%95%A8%EC%88%98_%EC%A0%95%EC%9D%98

//함수(funtion): 특정기능을 하는 구문을 독립된 부품으로 만들어 재사용하고자 할때
//               사용되는 문법이다.

/*
    함수정의
    (1) 함수 선언문
    funtion 함수명(매개변수){
        실행문;
        return 값;
    }

    (2) 함수 표현식
    let test = function(매개변수){
        실행문:
        return 값;
    }

    (3) 즉시실행(익명함수)
        변수선언대신 소괄호를 사용
        (function(param){
            console.log(`${param} run~~~`);
        })('test');


*/

let year = 2012;
let leapYearCheck = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
let yearData = leapYearCheck ? "윤년" : "평년";
if (leapYearCheck) {
  console.log(`${year}년도는 ${yearData}입니다.`);
}
//이 구문을 함수로 바꾸기

//함수정의
function isLeapYear(year) {
  //year : parameter(매개변수)
  let check;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    check = true;
  } else {
    check = false;
  }
  return check; //return 해야하는 값은 하나. 여러개면 안됨
}

year = 2014;
//함수 호출
let result = isLeapYear(year); //year : argument(인수)
console.log(result);
///////////////////////////////
if (result) {
  console.log(`${year}은 윤년입니다`);
} else {
  console.log(`${year}은 평년입니다.`);
}

//함수 정의
function add(a, b) {
  console.log(`a=${a}, b=${b}`);
  return a + b;
}

function add2(a, b, c) {
  return a + b + c;
}

//함수 호출
console.log(add(2, 3)); // 5 -> 매개변수가 나열된 순서대로 호출 (호출한 매개변수가 두자리여서 add호출)
console.log(add2(2, 3, 4)); // 9
console.log(add()); // NaN
console.log(add(1)); // NaN
console.log(add(1, "script")); //1script ''기호 입력시 문자의 연결로 인식됨
console.log(add(1, null)); // 1 null은 지정하지않은 값이라 1만 출력
console.log(add(1, 2, 3, 4, 5)); // 3 -> 지정하지않은 매개변수값이 있을경우, a,b를 리턴 a,b의 index인 1,2를 더해서 3이 출력
// console.log(add3()); // add3 is not define
//add(5, 7);

function hello(name) {
  console.log(`${name}님 환영합니다.`);
}

hello("홍길동");
console.log(hello("고수")); //undefined -> 지정해놓은값이 없기때문에

//////////////////////////////////////////////////////////////////////
//함수 표현식

//ES5 - 익명함수
// 함수식이 하나의 값으로 설정됨
let sum = function (a, b) {
  return a + b;
};

console.log(sum); //[Function: sum] html로 보면 콘솔창에 함수식이 출력됨
console.log(sum(10, 20)); // 30

let hap = function (a, b) {
  console.log(a + b);
};

console.log(hap); //[Function: hap]
console.log(hap(10, 30)); //undefined
hap(10, 30); //40 -> 밖으로 빼서 따로 써줘야함

//ES6 - 화살표 함수
let sub = (a, b) => {
  return a + b;
};

console.log(sub); //[Function: sub]
console.log(sub(3, 5)); //8

let call = (a, b) => {
  console.log(a + b);
};

console.log(call); //[Function: call]
console.log(call(3, 4)); //undefined -> return 값이 없음
call(3, 4); // 7 -> 따로 빼내서 undefined가 출력되지않음

// let call2 = (a) => {
//   return a;
// };

//위의 식과 아래의 식은 같음

//parameter가 한개이면 소괄호( ) 생략이 가능하다.
//return하는 문장만 실행문에 있으면 중괄호{ }와 return은 반드시 생략해야 한다. (중괄호를 생략할거면)
let call2 = (a) => a; //3

console.log(call2); //[Function: call2]
console.log(call2(3)); //3

let call3 = () => console.log("로그인 해주세요.");

console.log(call3); //[Function: call3]
console.log(call3()); //undefined
call3(); //로그인 해주세요.

////////////////////////////////////////
//다양한 함수 구조

//중첩함수
function outer(a, b) {
  let result = inner(a, b);
  function inner(a, b) {
    return a + b;
  }
  return result;
}

console.log(outer(10, 3)); //13

//콜백함수
//1. 다른 함수의 인수로써 사용되는 함수
//2. 어떠한 이벤트에 의해 호출되는 함수  : btn.onclick= funtion(){} (버튼을 클릭해 이벤트가 발생하였을때 -> 함수호출)
//https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
function callback(a, b) {
  return a + b;
}

function getNumber(callFunc) {
  console.log(`${callFunc}`);
  let result = callFunc(1, 6);
  return result;
}

console.log(getNumber(callback));

//클로저(closure)
/*
    1)중첩함수는 outer(외부)함수가 끝나면 외부에서 outer(외부)함수의 자원을 사용할 수 없다.
    2)클로저는 outer(외부) 함수보다 중첩 함수가 더 오래 유지되는 경우
        중첩 함수는 이미 생명주기가 종료한 외부함수의 변수를 참조할 수 있다.
        이런 중첩 함수가 클로저(closure)이다.
    3)클로저는 변수가 의도치 않게 변경되지 않도록 안전하게 은닉(information hiding)하고
        특정 함수에게만 상태 변경을 허용하여 상태를 안전하게 변경하고 유지하기 위해 사용한다.
        https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions#%EB%B2%94%EC%9C%84%EC%99%80_%ED%95%A8%EC%88%98_%EC%8A%A4%ED%83%9D
*/

function outerFun() {
  let sum = 50;
  function innerFun(a) {
    return sum + a;
  }
  return innerFun;
}
console.log(outerFun()); //[Function: innerFun]

let outerCall = outerFun();
console.log(outerCall); //[Function: innerFun]
console.log(outerCall(3)); //53
console.log(outerCall(4)); //54

function testA() {
  console.log("testA before");
  testB();
  console.log("testA after");
}

function testB() {
  console.log("testB before");
  testC();
  console.log("testB after");
}

function testC() {
  console.log("testC");
}

testA();
///////////////////////////////////////////
//함수 파라미터
function display(a, b) {
  console.log(`a=${a} b=${b}`);
}

display(1, 2); // a=1 b=2
display(1); //a=1 b=undefined
display(1, 2, 3, 4, 5); //a=1 b=2

//(1) 기본 파라미터(default parameter) : ES6 - 2015
function display2(a = 0, b = 0) {
  console.log(`a=${a} b=${b}`);
}
display2(1, 2); //a=1 b=2
display2(1); //a=1 b=0
display2(1, 2, 3, 4, 5); //a=1 b=2

//2. 나머지 파라미터(Rest Parameter) : ES6 - 2015
// - 파라미터 갯수를 가변으로 사용할 수 있도록 제공해주는 연산자이다.
// - spread operator(점 3개(...))를 맨 마지막 파라미터로 사용해주면 된다.

//spread operator를 단독으로 사용
function display3(...args) {
  console.log(args);
  console.log(typeof args, args instanceof Array);
}

display3(1, 2); //[ 1, 2 ]
//object true
display3(1); //[ 1 ]
//object true
display3(1, 2, 3, 4, 5); //[ 1, 2, 3, 4, 5 ]
//object true

// spread operator를 고정 파라미터와 같이 사용을 할때는 맨 마지막에 사용
function display4(num, ...args) {
  console.log(num);
  console.log(args);
}

display4(1, 2); // 1 [2]
display4(1); //1 []
display4(1, 2, 3, 4, 5); //1 [ 2, 3, 4, 5 ]

//arguments 객체
// - 함수 안에서만 기본으로 사용할 수 있는 자바스크립트 객체이다.
// - 함수 런타임 시점에 자동으로 생성되는 객체이며, 함수코드 및 파라미터는 무관하게 자동 생성된다
// - 함수 호출할때 함수로 전돨된 실제 인자들의 정보를 담고 있는 객체이다.
// - 함수 선언에서 파라미터로 정의한 변수 갯수보다 실제 함수 호출할때 전달하는
//   인수의 갯수가 다를 수 있는 자바스크립트의 특성을 고려해 만들어진 객체이다.

//arguments는 나머지 매개변수, 기본 매개변수 또는 비구조화된 매개변수가 없는 경우에만 사용가능
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments
function display5() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    console.log(typeof arguments, arguments instanceof Array, arguments.callee);
    console.log(arguments[i]);
  }
}

display5(1, 2);
// display5(3);
// display5(4, 5, 6, 7, 8);
