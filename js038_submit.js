//document.log_f.onsubmit = () => {}

// <!-- <input type="submit" value="login" /> -->
document.log_f.onsubmit = () => {
  let idNode = document.querySelector("#my_id");
  let passNode = document.querySelector("#my_pass");

  if (idNode.value == "") {
    alert("아이디를 입력하세요");
    return false;
  }

  if (passNode.value == "") {
    alert("비밀번호를 입력하세요");
    return false;
  }
};

/*
else if 못씀
input id와 input password는 비교하는 기준이 다르기때문에 (id와 password) 별개로취급하여 
else if를 쓰지않는다.
*/
