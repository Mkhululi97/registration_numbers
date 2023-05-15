const errorMsgEl = document.querySelector(".error-msg");
const inputRegNum = document.querySelector(".text-input");
const addBtn = document.querySelector(".add-btn");
const parentEl = document.querySelector(".reg-num-container");
const plateNumArr = [];
const regNum = RegNumbers();
addBtn.addEventListener("click", function () {
  let firstRegNum = document.querySelector(".reg-num");
  regNum.setRegNum(inputRegNum.value);
  errorMsgEl.innerHTML = regNum.errorMsg();
  if (regNum.errorMsg().length > 0) {
    errorMsgEl.classList.remove("hidden");
    setTimeout(function () {
      errorMsgEl.classList.add("hidden");
    }, 3000);
  } else {
    errorMsgEl.classList.add("hidden");
  }
  //create new element
  let newPlateNum = document.createElement("div");
  // populate new element with text from the input
  newPlateNum.textContent = regNum.validRegNum();
  // add class name
  newPlateNum.classList.add("reg-num");
  // append the new element to the parentEl
  parentEl.insertBefore(newPlateNum, firstRegNum);
  inputRegNum.value = "";
});
