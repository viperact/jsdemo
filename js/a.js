window.onload = function () {
  console.log("Hello");
  let data = document.getElementById("wrap");
  console.log(data.innerText);
};
// 옛날 방식 script type에 defer를 넣지않고 window.onload를 스크립트에 작성

// $(document).ready(function () {}); <-제이쿼레이서 쓰는 window.onload
