const errorMsgEl = document.querySelector(".error-msg");
const inputRegNum = document.querySelector(".text-input");
const parentEl = document.querySelector(".reg-num-container");
const addBtn = document.querySelector(".add-btn");
const filterBtn = document.querySelector(".filter-btn");
const clearBtn = document.querySelector(".clear-btn");
const selectMenu = document.querySelector("select");

// retrieved existing registrations
let numberPlateFromLocalStorageObj;
if (localStorage["number plate"]) {
  numberPlateFromLocalStorageObj = JSON.parse(
    localStorage.getItem("number plate")
  );
}
// adding registrations on existing ones
if (numberPlateFromLocalStorageObj) {
  let existingRegistrations = Object.keys(numberPlateFromLocalStorageObj); // returs arr.
  existingRegistrations.forEach(function (currentNumberPlate) {
    createDivElement(currentNumberPlate);
  });
}
const regNum = RegNumbers(numberPlateFromLocalStorageObj);
function createDivElement(input) {
  // create element
  let childEl = document.createElement("div");
  // add class to element
  childEl.classList.add("reg-num");
  let firstRegNum = document.querySelector(".reg-num");
  // populate the div element
  childEl.innerHTML = input;
  if (input !== undefined) {
    parentEl.insertBefore(childEl, firstRegNum);
  }
}
function addBtnFunction() {
  regNum.setRegNum(inputRegNum.value);
  // deal with the errors before calling the validRegNum function.
  if (regNum.errorMsg().length > 0) {
    errorMsgEl.innerHTML = regNum.errorMsg();
    errorMsgEl.classList.remove("hidden");
    setTimeout(function () {
      errorMsgEl.classList.add("hidden");
    }, 3000);
  } else {
    errorMsgEl.classList.add("hidden");
  }
  let numberPlate = regNum.validRegNum();
  // storing our object to local storage and coverting object to string with JSON.stringify.
  localStorage.setItem(
    "number plate",
    JSON.stringify(regNum.getRegNumbersMap())
  );
  createDivElement(numberPlate);
}
function filterBtnFunction() {
  let childElArr = Array.from(parentEl.children);
  childElArr.forEach(function (child) {
    if (child.innerHTML.startsWith(selectMenu.value)) {
      child.classList.remove("hidden");
    } else {
      child.classList.add("hidden");
    }
  });
}
function clearBtnFunction() {
  // remove all child element from the parent element and clears the registration numbers
  while (parentEl.lastElementChild) {
    parentEl.removeChild(parentEl.lastElementChild);
  }
  regNum.clearMap();
  localStorage.clear();
}
addBtn.addEventListener("click", addBtnFunction);
filterBtn.addEventListener("click", filterBtnFunction);
clearBtn.addEventListener("click", clearBtnFunction);
