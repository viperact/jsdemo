let btn = document.querySelector("button");

console.log("start");
btn.addEventListener(
  "click",
  function () {
    console.log("addEventListener");
  }, //callback 함수
  false
);

console.log("end");
