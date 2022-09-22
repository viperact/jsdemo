//js025_Number.js

let data = 10;
let fData = Number(data);
let nObj = new Number(data); // new를 붙이면 객체로 생성
console.log(`data=${typeof data}`); //data=number 원시데이터 타입 - 값만 가짐
console.log(`fData=${typeof fData}`); //fData=number 원시데이터 - 값만 가짐
console.log(`nOnj=${typeof nObj}`); //nOnj=object 객체 - 그 값을 판별할수있는 프로퍼티, 메서드를 제공

//toString() : number, Number -> string (toString은 기본숫자타입, 객체숫자타입을 글자타입으로 바꿔주는 메서드)
console.log(typeof nObj.toString()); // string / toString = 객체에서 사용된 함수 / ()를 붙이면 string으로 바꿈 (바꿀 수 있음)
console.log(typeof data.toString()); // string / . 을붙이면 원시데이터도 객체를 생성해줌 (js에서만)

//let nOnj = new Number(data)
//=
Number.prototype.toString = function () {};

console.log(data + fData); // number + number = 20
console.log(data + nObj); // number + object = 20 오브젝트에 저장되있는 값을 기본타입으로 바꿔서 가져와서 계산 (스크립트의 형식)

//Number -> number (객체를 기본타입으로 바꿔줌) - 이 상황이 내부에서 자동적으로 발생
//valueOf() : object -> primitive(객체를 해당하는 원시데이터값으로 바꿔줌)
console.log(typeof nObj.valueOf()); //number
console.log(typeof new String("javascript").valueOf()); //string / object타입을 valuOf()메서드로 string으로 바꿔줌

//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects
console.log(parseInt("10")); //10 / 표준내장객체(표준 내장 객체는 전역 범위의 여러 객체를 일컫는다.)

//let val = "10.0";
//let val = "10.3"; // 문자 10.3
//let val = "A";
//let val = "10A";
let val = "A10";
console.log(val + val); //1010 / 문자 + 문자

//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#static_properties
//Number(), parseInt()
console.log(Number(val) + Number(val)); //20 / 20.6 / 실수값 그대로 계산 / NaN / NaN / NaN (앞자리가 문자라 계산못함)
console.log(parseInt(val) + parseInt(val)); //10 / 20 / 정수값으로 바꿔서 출력 (소숫점 버림) / NaN / 20 (앞 숫자만 빼와서 계산) / NaN (앞자리가 문자라 계산못함)
console.log(parseFloat(val) + parseFloat(val)); //10 / 20.6 / 실수값 그대로 계산 / NaN / 20 (앞 숫자만 빼와서 계산) / NaN (앞자리가 문자라 계산못함)

console.log(Number.POSITIVE_INFINITY); //Infinity
console.log(Number.NaN); //NaN
//정적메서드 : . 으로 작성가능
//인스턴스 메소드 : new로 작성가능
