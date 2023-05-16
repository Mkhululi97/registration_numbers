const errorMsgEl = document.querySelector(".error-msg");
const inputRegNum = document.querySelector(".text-input");
const parentEl = document.querySelector(".reg-num-container");
const dropdown = document.querySelector("dropdown");
const addBtn = document.querySelector(".add-btn");
const filterBtn = document.querySelector(".filter-btn");
const numberPlateArr = [];
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
  // create div elements dynamically
  if (regNum.errorMsg().length < 1) {
    let numberPlate = regNum.validRegNum();
    numberPlateArr.push(numberPlate);
    //create new element
    let newNumberPlate = document.createElement("div");
    // populate new element with text from the input
    newNumberPlate.textContent = numberPlate;
    // add class name
    newNumberPlate.classList.add("reg-num");
    // append the new element to the parentEl
    // localStorage.setItem("number plate", numberPlateArr);
    // let localNumPlates = localStorage.getItem("number plate");
    // parentEl.insertBefore(localNumPlates, firstRegNum);
    parentEl.insertBefore(newNumberPlate, firstRegNum);
  }
  inputRegNum.value = "";
});
filterBtn.addEventListener("click", function () {
  regNum.getRegNumbersMap();
  console.log(regNum.selectedTown("CA"));
});
