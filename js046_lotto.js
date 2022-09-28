//1. 6개의 난수를 구하고 중복 체크
let lotto = [];
for (let i = 0; i <= 5; i++) {
  /* 0.0이상 ~ 1.0미만 */
  /* 0.0이상 ~ 45.0미만 */
  let ran = Math.random() * 45;
  /* 1이상 ~ 45까지 */
  ran = Math.floor(ran) + 1;
  /* 소숫점은 버리는 Math.floor() */
  console.log(ran);
  lotto.push(ran);
  ////// 난수값 구하기 ///////

  ////// 중복값 구하기 ///////
  for (j = 0; j < i; j++) {
    if (lotto[j] == lotto[i]) {
      i--;
      break;
    }
  }
}

//2. 정렬

lotto.sort((a, b) => {
  return a - b;
});

//3. 결과값 출력
// console.log(lotto);

let divList = document.querySelectorAll("div.wrap div");

divList.forEach((elemnet, idx) => {
  elemnet.innerText = lotto[idx];
});
