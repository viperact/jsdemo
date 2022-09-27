//약관 동의
document.frm.onsubmit = () => {
  let admin = document.frm.admin;
  if (!admin.checked) {
    //checked 안됐을때 결과값이 true
    alert("약관에 동의해야 합니다.");
    return false;
  }
};

//전체 선택
//js에서 checked = true (논리값)
document.frm.allCheck.onclick = function () {
  //console.log(this.checked); //true / 현재 event가 발생된 객체
  //   document.frm.subject1.checked = this.checked;
  //   document.frm.subject2.checked = this.checked;
  //   document.frm.subject3.checked = this.checked;

  let checkegroup = document.querySelectorAll(".checkgroup");
  //checkgroup에 해당하는 모든 요소를 가져옴
  console.log(checkegroup.length);

  /*
  //Arrow Function (화살표함수) :this는 상위 객체인 document.frm.allCheck를 의미함
  checkegroup.forEach((element) => {
    //<input type="checkbox" name="allCheck" id="allCheck" />
    //console.log(this);
    element.checked = this.checked;
  });
};
*/
  ///////////////////////////////////////////
  let myThis = this; //document.frm.allCheck

  //Anonymous Function (익명함수) : this는 window 객체를 의미함
  /*
    checkegroup.forEach(function (element) {
    // consol.log.log(this);
    element.checked = myThis.checked;
  });

  */
  ///////////////////////////////////////////
  //Array.from( ) : NodeList를 Array로 변경

  /*
  console.log(`${checkegroup}`);

  let myArray = Array.from(checkegroup);
  console.log(`${myArray}`);

  myArray.map(function (element) {
    //consol.log(this);
    element.checked = myThis.checked;
  });

  */

  //////////////////////////////////////
  //ES6 Spread Operator : NodeList를 Array로 변경
  let iArray = [...checkegroup];
  iArray.map(function (element) {
    //consol.log(this);
    element.checked = myThis.checked;
  });
};
