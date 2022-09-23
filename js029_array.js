//js029_array.js

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
//[ 'Banana', 'Orange', 'Apple', 'Mango' ]

//배열명.toString(): 배열에 있는 기호들을 없애줌
let data = fruits.toString();
console.log(`${data}`);
console.log(`${typeof data}`);
//Banana,Orange,Apple,Mango
//string

//배열명.join(): 배열안에 요소를 나누는 기호를 넣어줌
console.log(typeof fruits.join());
//string
console.log(fruits.join()); //default : ,
//Banana,Orange,Apple,Mango
console.log(fruits.join("*"));
//Banana*Orange*Apple*Mango
console.log(fruits.join("_"));
//Banana_Orange_Apple_Mango

//배열의 끝에 요소 추가
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push
fruits[4] = "Kiwi";
console.log(fruits);
//[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]
console.log(fruits.push("Melon"));
//6 / push() : Melon을 추가해주고 숫자값만 리턴 (배열의 길이를 리턴)
console.log(fruits);
//[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Melon' ]

//배열의 끝에 요소를 제거
console.log(fruits.pop());
//Melon / 끝 요소를 배열에서 빼옴
console.log(fruits);
//[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//배열의 앞에 요소를 추가
console.log(fruits.unshift("Melon"));
//6 / 요소를 추가하고 새로운 배열의 길이를 리턴
console.log(fruits);
//[ 'Melon', 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//배열 앞에 요소를 제거
console.log(fruits.shift());
//Melon / 맨 앞 요소를 배열에서 빼오고 반환
console.log(fruits);
//[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

// delete 배열명[n] : 배열안에 있는 n번째 요소를 제거시켜줌 (배열의 자리값은 갖고있음)
delete fruits[3];
console.log(fruits);
//[ 'Banana', 'Orange', 'Apple', <1 empty item>, 'Kiwi' ]

fruits[3] = "Mango";
console.log(fruits);
//[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]
//<1 empty item>의 자리에 Mango가 들어감

console.log(fruits.slice(1, 3)); // 배열명.slice(n, x)배열안 index n에서부터 x미만 값을 반환
//[ 'Orange', 'Apple' ]
console.log(fruits);
//[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

console.log(fruits.slice(-4, -2));
//[ 'Orange', 'Apple' ]
console.log(fruits);
//[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

console.log(fruits.slice(1)); //1번에 해당하는 요소를 빼고 반환
//[ 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//오름차순 정렬
console.log(fruits.sort());
//[ 'Apple', 'Banana', 'Kiwi', 'Mango', 'Orange' ]
console.log(fruits);
//[ 'Apple', 'Banana', 'Kiwi', 'Mango', 'Orange' ]

//내림차순 정렬 / 오름차순으로 정렬을 한다음에 적용시켜야함.
console.log(fruits.sort().reverse());
//[ 'Orange', 'Mango', 'Kiwi', 'Banana', 'Apple' ]

//javascript에서 sort()는 Tim Sort 알고리즘을 사용한다.
//Tim Sort는 Insertion Sort와 Merge Sort를 결합하여 만든 정렬이다.
//Tim Sort 알고리즘 : http://d2.naver.com/helloworld/0315536
//숫자를 sort할 경우 숫자는 유니코드의 코드값에따라 오름차순으로 정렬된다
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#%EC%84%A4%EB%AA%85
let point = [40, 100, 1, 5, 10];
console.log(point.sort());

//오름차순
//[ 1, 10, 100, 40, 5 ]
console.log(
  point.sort(function (a, b) {
    console.log(`a:${a}, b:${b} a-b:${a - b}`);
    return a - b; // a-b 값이 양수거나 0이면 그대로진행, 음수이면 b값은 해당값 앞에 값으로 진행
  })
);
/*
a:10, b:1 a-b:9
a:100, b:10 a-b:90
a:40, b:100 a-b:-60
a:40, b:10 a-b:30
a:40, b:100 a-b:-60
a:5, b:40 a-b:-35
a:5, b:10 a-b:-5
a:5, b:1 a-b:4
[ 1, 5, 10, 40, 100 ]
*/

//내림차순
console.log(
  point.sort(function (a, b) {
    // console.log(`a:${a}, b:${b} a-b:${a - b}`);
    return b - a;
  })
);

//배열을 합칠때 배열명.concat(합칠배열명 ,[추가할 배열요소])
let xData = [1, 2, 3];
let yData = [4, 5, 6];
let zData = xData.concat(yData, [7, 8, 9]);
console.log(zData.length);
//6 / 배열의 길이
console.log(zData);
//[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] / 배열

//배열명.flat(n) : 배열안의 요소의 값을 n만큼 펼쳐줌
let arr2 = [1, 3, [[[4, 5]]], [7, 8]];
console.log(arr2.flat());
//[ 1, 3, [ [ 4, 5 ] ], 7, 8 ]
console.log(arr2);
//[ 1, 3, [ [ [Array] ] ], [ 7, 8 ] ]
console.log(arr2.flat(1));
//[ 1, 3, [ [ 4, 5 ] ], 7, 8 ]
console.log(arr2.flat(2));
//[ 1, 3, [ 4, 5 ], 7, 8 ]
console.log(arr2.flat(3));
//[ 1, 3, 4, 5, 7, 8 ]
