//js026_String.js
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String

let data = "It`s alright";
console.log(data);

//length : 문자열의 길이
console.log(data.length); //12

//java에서 사용되는 구문
// console.log(data.length());

/*
    특정 범위 데이터를 리턴해주는 3가지 매소드
    1. substring(star, end); // end : 지정값 미만
    2. substr(start, length); // length  : 길이
    3. slice(star, end);
*/

data = "Apple, Banana, Kiwi";
//                    -4-3-2-1 (인덱스 값 거꾸로 할때는 맨뒤는 -1부터시작)
console.log(`substring: ${data.substring(7, 13)}`); // substring: Banana / 7 인덱스 부터 13인덱스 미만
//substring()은 음수값을 지원하지 않는다. (리버스값은 가져올 수 없다)
console.log(`substring: ${data.substring(-12, -6)}`); // substring:

console.log(`substr: ${data.substr(7, 6)}`); //substr: Banana
console.log(`substr: ${data.substr(-12, 6)}`); //substr: Banana / 음수값이 적용됨

console.log(`slice: ${data.slice(7, 13)}`); //slice: Banana
console.log(`slice: ${data.slice(-12, -6)}`); //slice: Banana / 음수값 적용됨

//replace('찾을 문자열|RegExp', '바꿀 문자열');
// i: 대소문자 구분없음, g: 대소문자 구분하여 모든 문자열
//
console.log(`replace: ${data.replace("Banana", "Grape")}`); // replace: Apple, Grape, Kiwi / Banana가 Grape로 바뀜
//srting으로 저장한 문자는 바뀌지않음. (string = 불변)
//replace는 data 값을 새로 생성하여 값을 바꿔 불러오기만 한것
// console.log(data);에는 Apple, Banana, Kiwi 출력
console.log(data);

//정규 표현식
data = "Mr Blue has a blue house and a blue car"; //Mr Blue has a red house and a blue car
console.log(data.replace(/blue/, "red"));
//                    대소문자구분
//                  똑같은 문자를 찾음

data = "Mr Blue has a blue house and a blue car"; //Mr Blue has a red house and a red car
console.log(data.replace(/blue/g, "red"));
//                         g:대소문자를 구별하여 앞에서 바꿀 단어들을 전부 바꿔줌

data = "Mr Blue has a blue house and a blue car"; //Mr red has a blue house and a blue car
console.log(data.replace(/blue/i, "red"));
//                         i:대소문자 구분없이 첫번째에 나오는 /~/에 해당하는 단어를 바꿈

data = "Mr Blue has a blue house and a blue car"; //Mr red has a red house and a red car
console.log(data.replace(/blue/gi, "red"));
//                         gi:대소문자 상관없이 /~/에 해당하는 단어를 전부 바꿈

data = "Hello World";
console.log(`toUpperCase() : ${data.toUpperCase()}`);
//toUpperCase() : HELLO WORLD (모두 대문자로 바뀜)
console.log(`toLowerCase() : ${data.toLowerCase()}`);
//toLowerCase() : hello world (모두 소문자로 바뀜)

let data2 = "javascript";
console.log(`concat() : ${data.concat(data2)}`);
//concat() Hello Worldjavascript
console.log(`concat() : ${data.concat(" ", data2)}`);
//concat() : Hello World javascript
//concat('', data2) => '': 공백추가, _ : _추가

console.log(`charAt(): ${data.charAt(0)}`); //data 에서 0번째 인덱스를 가져와라
//charAt(): H
console.log(`charAt(): ${data.charCodeAt(0)}`); //data에서 0번째 값의 유니코드를 가저와라
//charAt(): 72 (H의 unicode 값)

data = "a,b,c,d,e";

let arr = data.split(",");
for (let i of arr) console.log(i); //for ~ of : arr에 있는 요소들(data값)을 가져온다.
//split() : 문자열을 나눠준다.
/*
a
b
c
d
e
*/

//match() : 검색데이터와 일치하는 문자열이 있으면 문자열 모두를 찾아서 배열로 리턴하고
//          일치하는 문자열이 없으면 null로 리턴한다.
data = "Mr Blue has a blue house and a blue car";
let res = data.match(/blue/g);
console.log(`match() : ${res} ${typeof res} ${res instanceof Array}`);
//match() : blue,blue object true

res = data.match(/red/g);
console.log(`match() : ${res} ${typeof res} ${res instanceof Array}`);
//match() : null object false

//search() : 검색데이터와 일치하는 문자열이 있으면 처음의 index를 리턴하고
//           일치하는 문자열이 없으면 -1을 리턴한다.
res = data.search(/blue/g);
console.log(`search(): ${res}`); // index값으로 리턴
//search(): 14

res = data.search(/red/g);
console.log(`search(): ${res}`); // 찾는 문자열이 없다면 -1 리턴
//search(): -1

//indexOf():지정한 문자열의 index값을 리턴
data = "Mr Blue has a blue house and a blue car";
console.log(data.indexOf("M"));
//0
console.log(data.indexOf("B"));
//3
let position = data.indexOf("blue");
console.log(data.indexOf("blue", position + 1));
//31
//let position = data.indexOf("blue"); => position값 설정
//console.log(data.indexOf("blue", position + 1)); => 두번째position blue의 index값을 return

data = "Mr Blue has a blue house and a blue car";
let pos = -1;
do {
  pos = pos + 1;
  pos = data.indexOf("blue", pos + 1);
  if (pos != -1) {
    console.log(pos);
  }
} while (pos != -1);

data = "Mr Blue has a blue house and a blue car";
for (let i = 0; i < data.length; i += 1) {
  i = data.indexOf("blue", i);
  if (i == -1) break;
  console.log(i);
}

// data = "Mr Blue has a blue house and a blue car";

// for (let i = -1; i < data.length; i++) {
//   i = i + 1;
//   i = data.indexOf("blue", i + 1);
//   if (i != -1) {
//     console.log(i);
//   }
//   return i;
// }

//repeat()
let text = "korea";
console.log(text.repeat(10));

text = "*";
console.log(text.repeat(10));

//trim : 문자의 '사이의' 공백을 제거시켜줌 맨 오른쪽 공백은 포함시키지않음
let text2 = "  korea   data ";
console.log(text2.length);
//9
console.log(text2.trim().length);
//12
