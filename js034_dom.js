// // window.onload = function () {
// //   //현재 페이지가 로딩이 되면 (window.onload)
// //   let hNode = document.getElementById("selector");
// //   console.log(hNode);
// //   //이 실행문을 실행하라
// };

// 옛날방법

let hNode = document.getElementById("selector");
console.log(hNode, typeof hNode);

let hId = document.querySelector("#selector");
// querySelector : 선택자
console.log(hId, typeof hId);

let hClass = document.querySelector(".choice");
console.log(hClass, typeof hClass);

//자바스크립트에서 HTML에 접근하는 방법

//HTMLCollection(4)
let pNode = document.getElementsByTagName("p");
console.log(pNode, typeof pNode); // 객체
console.log(pNode.length); //4
console.log(pNode[0], pNode.item[0]); //배열처럼 접근가능, item접근 가능
console.log(pNode[0].innerText);

pNode[0].style.backgroundColor = "yellow";
// 아래 html의 스타일식과 같음
// p:nth-of-type(1) {
//     background-color: yellow;
pNode[2].style.backgroundColor = "skyblue";

function process() {
  //   alert("dd");
  let fname = document.frm.fname;
  //<input type="text" name="fname" placeholder="이름입력" />
  console.log("fname:", fname);
  console.log(fname.value);
  //value = 입력한 값
  console.log(fname.defaultValue);
  //defaultValue : 입력한 값, 디폴트값이 같이 넝어옴

  //[object HTMLInputElement]
  //   document.write(fname);
  return false;
}
