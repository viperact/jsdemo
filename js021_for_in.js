//js021_for_in.js

//스크립트의 배열은 여러가지 값을 한데 묶는데 사용된다
let color = ["red", "green", "blue"]; // [0], [1], [2]    []안의 요소들은 element 요소
console.log(color[0]); //red
console.log(color[1]); //green
console.log(color[2]); //blue
// console.log(color[3]); //undefined 없는 값

//length : 배열에 저장되어있는 요소의 갯수 리턴
console.log(color.length); //3 method값,  (keyword값과 햇갈리지말기)

for (let index = 0; index <= 2; index++) {
  console.log(color[index]);
}

//배열에 'black'요소 추가
color[3] = "black";
console.log(color.length); //4

for (let index = 0; index < color.length; index++) {
  console.log(color[index]);
}

//객체 리터널 : {property:value, property:value}
//java : element를 가져옴            for(string element : city){} -> java의 조건식
//javascript : index를 가져옴        for(let idx in city){}
let city = ["서울", "부산", "대전"];
for (let idx in city) {
  //   console.log(idx); //0 1 2
  console.log(city[idx]);
}

let obj = { a: 1, b: 2, c: 3 };
console.log(obj); //{ a: 1, b: 2, c: 3 }

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

for (let prop in obj) {
  console.log(prop);
  console.log(obj[prop]);
  console.log(`${prop}:${obj[prop]}`); // c:3
  console.log(`${prop}:${obj.prop}`); // c:undefined
}
