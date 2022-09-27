//1. 작은 이미지를 클릭하면 큰 이미지로 보이게

//큰 사진을 지정
let bigPhoto = document.querySelector("#photo > img");
console.log(bigPhoto);

let list_zone = document.querySelector("#inner_list");
let ul_li = list_zone.children;
console.log(ul_li); //HTMLCollection(8)

//Array <= HTMLCollection
ul_li = [...ul_li]; //ul_li = Array.from(ul_li); = 배열로 바꾸기

ul_li.map((liTag, idx) => {
  let aTag = liTag.querySelector("a");
  aTag.onclick = () => {
    bigPhoto.src = aTag.href;
    return false; //e.preventDefault = onclick에 e에 대한 정보를 입력해줘야함
  };
});

//(2) 다음 ( > )버튼을 클릭할때마다 <li>이 100만큼 이동하게
let m_num = 0;

let b_btn = document.querySelector("#next_btn");
b_btn.onclick = () => {
  if (m_num >= ul_li.length - 3) return false;
  //조건을 만족하면 실행문 멈춤
  m_num++;
  list_zone.style.marginLeft = -100 * m_num + "px";

  return false; // = e.preventDefault
};

//(3) 이전( > )버튼을 클릭할때마다 <li>이 100만큼 이동하게
let before_btn = document.querySelector("#before_btn");
before_btn.onclick = (e) => {
  if (m_num <= 0) return false; // 함수를 빠져나가는 리턴
  m_num--;
  list_zone.style.marginLeft = -100 * m_num + "px";

  return false; // = e.preventDefault , 기본 이벤트값을 차단시켜주는 리턴 실행문의 리턴과는 역할이 다름
};
