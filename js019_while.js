// js019_while.js

/*
초기식,증감식을 지정하지않음
    while(조건식){
        실행문;
    }
*/

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("===================");
let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

while () {
  //while문은 조건식 생략 불가능 생략시 오류, true를 넣어주거나(무한반복) 식을 작성
  console.log("test");
}

/*
    do{
        실행문;
    }while(조건식); <-세미콜론 반드시 찍어야함
*/

for (let i = 3; i <= 1; i++) {
  console.log(i);
}
//이 for문은 조건식이 false기 때문에 실행이 안되는데,do ~ while문은 실행문뒤에 조건식이 있기때문에
//무조건 한번은 실행문이 작동된다

let input = "n";
do {
  console.log("고객님 주문하시겠습니까?(y/n)");
} while (input == "y");
