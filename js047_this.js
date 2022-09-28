//호출한 객체가 없을 경우에는 기본적으로 window객체이다.
console.log(this);

let member = {
  name: "홍길동",
  show: function () {
    console.log(this);
  },
};
////////////////////////////////
//객체에서 사용이 된 this는 객체를 가져온다
//{name: '홍길동', show: ƒ}
member.show();
/////////////////////////////////
let member2 = {
  name: "홍길동",
  show: () => {
    console.log(this);
  },
};

//Window
member2.show();
//////////////////////////////////

function showThisName() {
  console.log(this);
}

showThisName;
//Window

let showThisName2 = () => {
  console.log(this);
};

showThisName2();
//Window

/////////////////////////////////////////
//이벤트에서 this
let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  //<button id="btn">commit</button> true
  console.log(this, this == btn);
});

let btn2 = document.querySelector("#btn");
btn2.addEventListener("click", () => {
  //window false
  console.log(this, this == btn2);
});

////////////////////////////////////
const hong = { name: "홍길동" };
const jung = { name: "정해인" };
////////////////////////////////////
//call() : call메서드는 모든 함수에서 사용할 수 있으며
//         this값을 책정값으로 지정할 수 있다.
console.log("call()====================");
showThisName.call(hong);
//함수호출 / {name: '홍길동'}
showThisName.call(jung);
//{name: '정해인'}

showThisName2.call(hong);
//Arrow Function 일떄 : window
showThisName2.call(jung);
//Arrow Function 일떄 : window

function update(birthYear, job) {
  this.birthYear = birthYear;
  this.job = job;
  console.log(this);
}

update(2019, "IT");
//this값 = Window

//this로 사용할 hong객체와 update함수의 매개변수에서 받을 인수를 넘긴다.
update.call(hong, 2000, "프로그래머");
//this값 = {name: '홍길동', birthYear: 2000, job: '프로그래머'}

//this로 사용할 jung객체와 update함수의 매개변수에서 받을 인수를 넘긴다.
update.call(jung, 2016, "디자이너");
//{name: '정해인', birthYear: 2016, job: '디자이너'}

////////////////////////////////////////////////////
//apply
//1. apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 같다.
//2. call은 일반적인 함수와 마찬가지로 매개변수로 직접 받지만(하나씩)
//   apply는 매개변수를 배열로 받는다.

console.log("apply()====================");

update.apply(hong, [2000, "프로그래머"]);
//{name: '홍길동', birthYear: 2000, job: '프로그래머'}

update.apply(jung, [2016, "디자이너"]);
//{name: '정해인', birthYear: 2016, job: '디자이너'}

////////////////////////////////////////////////
//bind
// 1. call과 사용방법은 같으나 실행을 해야한다.

let hongUpdate = update.bind(hong, 2000, "프로그래머");
hongUpdate();
//{name: '홍길동', birthYear: 2000, job: '프로그래머'}

let jungUpdate = update.bind(jung, 2016, "프로게이머");
jungUpdate();
//{name: '정해인', birthYear: 2016, job: '프로게이머'}
