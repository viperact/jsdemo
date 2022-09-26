document.frm.onsubmit = () => {
  let optFruit = document.frm.fruit;
  console.log(optFruit);

  let optSelect = optFruit.selectedIndex + "" + optFruit.value;
  console.log(`${optSelect}`);

  return false;
  //서버에 페이지를 요청하지 못하도록 막아놓음 (서버에 데이터가 안넘어가게)
};
