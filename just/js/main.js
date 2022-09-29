///////////////////////////
//슬라이딩 구현

setInterval(function () {
  let tg = document.querySelector(".slide");
  tg.style.top = "-100%";
  //대상의 top값이 -100%로 0.6초동안 transition이 발생
  tg.style.transition = "0.6s"; // 다른이미지가 올라오는 시간

  setTimeout(function () {
    console.log(tg.querySelectorAll("li").length);
    let first = tg.querySelectorAll("li")[0];
    console.log(first);
    tg.appendChild(first);
    tg.style.top = "0";
    //대상의 top의 값이 0으로 변경된다
    tg.style.transition = "none";
    //transition 없애기
  }, 600); //0.6초 / 다른 이미지가 올라오는 시간
}, 3000); //3초 / 바뀌는 간격

///////////////////////////
//공지사항 및 갤러리 구현
function chgTab(i1, i2) {
  //i1 : class를 넣을 li순번
  //i2 : class를 뺼 li 순번

  let tm = document.querySelectorAll(".tm>li");
  let tc = document.querySelectorAll(".tc>li");

  //on클래스 넣기
  tm[i1].classList.add("on");
  tc[i1].classList.add("on");

  //on클래스 뺴기
  tm[i2].classList.remove("on");
  tc[i2].classList.remove("on");
}

///////////////////////////
//팝업창 닫기
function popup(sts) {
  let pop = document.querySelector(".pop");
  pop.style.display = sts;
}
