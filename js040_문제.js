// let date = new Date();
// console.log(date);

// console.log(date.getFullYear()); //2022 - 년도
// console.log(date.getMonth() + 1); //8 - 월 (1월을 0으로 처리함)
// console.log(date.getDate()); // 26 - 일
// console.log(date.getDay()); // 1(월요일) - 요일 (일요일 - 0, 토요일 - 6 / 요일을 숫자로 가져옴)

// let date = new Date();

// let year = date.getFullYear();
// let month = date.getMonth() + 1;
// let day = date.getDate();
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let sec = date.getSeconds();

// let dateStr =
//   year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + sec;

// console.log(dateStr);

// function btn() {
//   document.getElementById("today").innerText = dateStr;
// }

let dateBtnNode = document.getElementsByTagName("button")[0];
dateBtnNode.onclick = () => {
  let pNode = document.getElementsByTagName("p")[0];

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let hour = today.getHours();
  let minutes = today.getMinutes();
  let sec = today.getSeconds();

  pNode.innerText = `${year} - ${month} - ${day} ${hour} : ${minutes} : ${sec}`;
};
