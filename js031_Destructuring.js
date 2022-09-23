//js031_Destructuring.js

//Destructuring (구조 분해 할당)
//structuring(구조화)된 데이터의 배열또는 객체를 Destructuring(비구조화)해서
//개별적으로 변수에 할당하는 개념이다.

//1. 배열 Destructuring
let level = [5, 10];
let a, b;
a = level[0];
b = level[1];
console.log(`a=${a}, b=${b}`);
//a=5, b=10

let c, d;
[c, d] = [5, 10];
console.log(`c=${c}, d=${d}`);
//a=5, b=10

let m, n;
[n, m] = [c, d];
console.log(`m=${m}, n=${n}`);

let k, p, next;
[k, p, next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`k=${k}`); //k=1
console.log(`p=${p}`); //p=2
console.log(`next=${next}`); //next=3

[k, p, ...next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`k=${k}`); //k=1
console.log(`p=${p}`); //p=2
console.log(`next=${next}`); //next=3,4,5,6,7,8
//배열에서의 ...은 앞 지정값 외에 나머지 값들을 가져옴

[k, , p, , ...next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`k=${k}`); //k=1
console.log(`p=${p}`); //p=2
console.log(`next=${next}`); //next=3,4,5,6,7,8
//공백은 상관없이 반환

// [k, , p, , ...next] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(`k=${k}`);
// console.log(`p=${p}`);
// console.log(`next=${next}`); --오류?

[k, _, p, _, ...next] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`k=${k}`); //k=1
console.log(`p=${p}`); //p=3
console.log(`next=${next}`); //next=5,6,7,8
//_ 는 제외하고 반환

let u, t, w;
[u, t, w] = [1, 2];
console.log(`u=${u} t=${t} w=${w}`);
//u=1 t=2 w=undefined

[u, t, w = 3] = [1, 2];
console.log(`u=${u} t=${t} w=${w}`);
//u=1 t=2 w=3

[u, t = 4, w = 5] = [1, 2];
console.log(`u=${u} t=${t} w=${w}`);
//u=1 t=2 w=5

//2. 객체 Destructuring (구조 분해 할당) 중괄호{}로 묶어줌
const customer = { fullname: "고수", job: "연기자" };
let fullname = customer.fullname;
let job = customer.job;
console.log(`fullname: ${fullname}, job: ${job}`);
//fullname: 고수, job: 연기자

let { fullname: fn, job: jb } = customer; //fullname 값은 fn에, job의 값은 jb에 저장
console.log(`fullname: ${fn}, job: ${jb}`);
//fullname: 고수, job: 연기자

let { job: work, fullname: fname } = customer;
console.log(`job: ${work}, fullname: ${fname}`);
//job: 연기자, fullname: 고수

let { fullname: name, job: jbn, loc = "서울" } = customer;
console.log(`fullname: ${name}, job: ${jbn}, loc: ${loc}`);
//fullname: 고수, job: 연기자, loc: 서울

// let s, r;
// {s:s, r:r} = { s: 1, r: 2}
// ==> //오류

let s, r;
({ s: s, r: r } = { s: 1, r: 2 }); // 중괄호쪽을 대괄호로 묶어줌
console.log(`s=${s} r=${r}`);
//s=1 r=2

////////////////////////////////////////////////////////////////////////////////

//completed의 값이 true인 데이터만 검색하라.
let habits = [
  { id: 1, content: "수영", completed: false },
  { id: 2, content: "걷기", completed: true },
  { id: 3, content: "명상", completed: true },
  { id: 4, content: "독사", completed: false },
];

for (let i = 0; i < habits.length; i++) {
  if (habits[i].completed) {
    console.log(habits[i]);
  }
}
/*
{ id: 2, content: '걷기', completed: true }
{ id: 3, content: '명상', completed: true }
*/

let listHabit = [];
for (let i = 0; i < habits.length; i++) {
  if (habits[i].completed) {
    listHabit.push(habits[i]);
  }
}

console.log(listHabit);
/*
[
  { id: 2, content: '걷기', completed: true },
  { id: 3, content: '명상', completed: true }
]
*/

/////////////////////////////////////////////////

let completedHabits = habits.filter((element) => {
  return element.completed;
});

console.log(completedHabits);
/*
[
  { id: 2, content: '걷기', completed: true },
  { id: 3, content: '명상', completed: true } -----??
]

*/

////////////////////////////////////////
//member 변수에서 데이터를 추출하여 '고수 고객님은 서울에 거주합니다.' 라고 출력하세요.

let member = {
  hname: "고수",
  address: {
    zipcode: "526-143",
    city: "서울",
  },
};

// let { hname, address } = member;
// let { city } = address;

// console.log(`${hname} 고객님은 ${city}에 거주합니다`);

({
  hname,
  address: { city },
} = member);

console.log(`${hname} 고객님은 ${city}에 거주합니다`);
