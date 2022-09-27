let btn = document.querySelector("button");

// btn.onclick = () => {
//   alert("click1");
// };

// btn.onclick = () => {
//   alert("click2");
// };
//마지막 click2만 적용

function click1() {
  alert("click1");
}

function click2() {
  alert("click2");
}

//btn.addEventListener('이벤트', 함수, 이벤트 전파)
//이벤트 전파 => true : capturing, false : bublling
btn.addEventListener("click", click1, false);
btn.addEventListener("click", click2, false);
