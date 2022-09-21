//js018_for.js
/*
    for문
    for문은 조건식을 만족할 때 까지 특정 실행문을 반복해서 실행한다.
    
    for(초기값; 조건식; 증강식){
        실행문;
        조건식 생략시 조건은 언제나 true
    }

    초기값 -> 조건식 (true) -> 실행문 -> 증감식
            -> 조건식 (true) -> 실행문 -> 증강식
            -> 조건식 (false) -> 반복문 빠져나감
*/

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("===================");
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

console.log("===================");

//for문에서 조건식을 생략하면 무한루프로 실행된다 (실행문 -> 증강식 -> 실행문 -> 증강식 -> ...)
let i = 1,
  sum = 0;

for (; ; i++) {
  //생략을 하더라도 세미콜론은 반드시 넣어줘야함
  sum += i;
  if (sum >= 30) break;
}
console.log(`i=${i} sum=${sum}`);

// 위는 생략, 아래는 생략안한 조건식

for (i = 1, sum = 0; ; i++) {
  sum += i; //sum = sum + i
  if (sum >= 30) break; //조건식을 만족시키는 문장이 하나라면 {} 생략가능, 두개이상이면 생량불가능
}
console.log(`i=${i} sum=${sum}`);

console.log("===================");

/*1~10 짝수와 홀수의 합을 구해서 출력하는 프로그램을 구현하세요
[출력결과]
짝수 : ?
홀수 : ?
*/

let odd = 0; //홀수누적
let even = 0; //짝수누적

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) {
    //i가 홀수라면 odd = odd + i
    odd += i;
  } else {
    //i가 짝수라면 even = evne +i
    even += i;
  }
}

console.log(`짝수:${even}`);
console.log(`홀수:${odd}`);

console.log("===================");
let a = 10,
  b = 5;

for (a % 2 == 0, b % 2 == 1; a <= 10; a++) {
  b += a;
  if (b >= 10) break;
}

console.log(`짝수=${a} 홀수=${b}`); //오답 고쳐보기

console.log("===================");
/*
continue : 반복문에서 continue를 만나면 조건식으로 이동한다.

for(초기식; 조건식; 증감식){
  continue;
}
while(조건식){
  continue;
}
*/

//1~10까지 3의 배수를 뺀 값만 출력시켜라
for (let i = 1; i <= 10; i++) {
  if (i % 3 == 0) {
    continue; //for문에서 continue를 만난다면 아래는 가지않고 다시 for 조건식으로 돌아감
    // i를 3으로 나눈값이 0이라면 증감식으로 증감식으로 돌아가서 다시 조건식 진행
    // i를 3으로 나눈값이 0이 아니라면 console.log 출력
  }
  console.log(`${i}`); //1 2 4 5 7 8 10 ->조건이 만족됐을때 나오는 출력값
}

console.log("===================");
/*
중첩 반복문
  for(초기값; 조건식; 증강식){
      for(초기값; 조건식; 증강식){
        실행문;
      }
    }
*/

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    //for문 안의 for문은 조건식이 false가 될때까지 반복하고,
    //false값이 되고 나면 첫번째 for문으로 다시 돌아가서 반복한다.
    // console.log(`i=${i} j=${j}`);
    process.stderr.write(`i=${i} j=${j},`);
    // console.log출력값을 세로줄 한줄로 출력해줌
  }
  process.stderr.write("\n");
  //첫번째 반복문이 시행될때마다 줄을 바꿔주는 명령어
}

//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
//이스케이프 : 프로그램에서 주변 장치를 컨트롤하기 위해서 사용되는 기능
//  \n : 줄바꿈  \t : 탭키  \",  \' : 따옴표 추가  \b : 백스페이스  \v : 수직탭

console.log("===================");

//label 정의 (move{}) 이동하고싶은 label로
movei: for (let i = 1; i <= 5; i++) {
  for (let j = 10; j <= 13; j++) {
    for (let k = 1; k <= 3; k++) {
      console.log(`i=${i} j=${j} k=${k}`);
      if (k == 2) break movei; // break발생시 movei로 넘어가라
    }
  }
}
