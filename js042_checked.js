let totalCar = document.getElementById("total");

//tbody 기준 input type에 있는 type이 체크박스인것을 가져와라
let cnbCnt = document.querySelectorAll('tbody input[type="checkbox"]');
console.log(cnbCnt); //NodeList

//NodeList를 Array로 변환
let myCnb = [...cnbCnt];
// console.log(myCnb);

//checkbox에 onclick이벤트가 발생되었을때 수행될 carCount()을 등록
myCnb.map((element) => {
  //console.log(this); // winodw
  element.onclick = carCount;
});

function carCount() {
  //this : 현재 이벤트가 발생된 checkbox 객체를 나타냄
  // console.log(this);
  // console.log(this.id);

  //defaultValue는 <input>에 초기에 입력된 value의 값을 기억해 가져온다
  let basicCar = Number(totalCar.defaultValue);

  myCnb.map((element) => {
    if (element.checked) basicCar += Number(element.value);
  });

  totalCar.value = basicCar;
}
