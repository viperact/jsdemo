// let date = new Date();
// console.log(date);

// console.log(date.getFullYear()); //2022 - 년도
// console.log(date.getMonth() + 1); //8 - 월 (1월을 0으로 처리함)
// console.log(date.getDate()); // 26 - 일
// console.log(date.getDay()); // 1(월요일) - 요일 (일요일 - 0, 토요일 - 6 / 요일을 숫자로 가져옴)

let date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

let dateStr = year + "-" + month + "-" + day;

console.log(dateStr);

dateStr = document.onsubmit = () => {
  document.write(dateStr);
};
