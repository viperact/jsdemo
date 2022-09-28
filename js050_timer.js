//https://velog.io/@proshy/JS-%EB%B9%84%EB%8F%99%EA%B8%B0-%EB%8F%99%EC%9E%91-%EA%B3%BC%EC%A0%95

function display() {
  for (let i = 0; i <= 5; i++) {
    console.log(`i=${i}`);
  }
}

console.log("start");

//1000 = 1초
//setTimeout(실행함수, 시간) /
setTimeout(display, 1000);

console.log("end");
