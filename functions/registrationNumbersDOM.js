const inputRegNum = document.querySelector(".text-input");
const addBtn = document.querySelector(".add-btn");
const regNum = RegNumbers();

addBtn.addEventListener("click", function () {
  regNum.setRegNum(inputRegNum.value);
  alert(regNum.getRegNum());
});
