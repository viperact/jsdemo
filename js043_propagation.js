//버블링
document.querySelector(".red").onclick = (e) => {
  alert("red");
};

document.querySelector(".green").onclick = (e) => {
  alert("green");
  e.stopPropagation();
};

document.querySelector(".blue").onclick = (e) => {
  alert("blue");
  console.log(e); //e 의 이벤트를 보여줌
  e.stopPropagation(); //캡처링이나 버블링을 멈춤
  //   return false; // jQuery 에서 사용 = stopPropagation()
};

document.querySelector("a").onclick = (e) => {
  alert("안녕하세요");
  //   e.preventDefault();
  return false; //e.preventDefault(); , return false 둘 다 이벤트현상을 막음
};

/*
//
https://velog.io/@jakeseo_me/2-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%BA%A1%EC%B2%98%EB%A7%81-%EB%B2%84%EB%B8%94%EB%A7%81

[1] Event Propagation (이벤트 전파)
    1. 캡처링(capturing phase) : 부모요소에서 Target요소로 이벤트가 전파
    2. 버블링(bubbling phase) : Target요소에서 부모요소로 이벤트 전파
[2] 이벤트 차단
https://developer.mozilla.org/ko/docs/Web/API/Event/stopPropagation

    stopPropagation()

[3] stopPropagation()와 preventDefault() 비교
    stopPropagation() : 이벤트 전파 차단 / return false (jQuery 에서만 사용가능)
    preventDefault() : 디폴트 이벤트 차단 / return false (javascript, jQuery 둘 다 사용가능)
 */
