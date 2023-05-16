const errorMsgEl = document.querySelector(".error-msg");
const inputRegNum = document.querySelector(".text-input");
const parentEl = document.querySelector(".reg-num-container");
const dropdown = document.querySelector("dropdown");
const addBtn = document.querySelector(".add-btn");
const filterBtn = document.querySelector(".filter-btn");
const clearBtn = document.querySelector(".clear-btn");
const selectMenu = document.querySelector("select");
const numberPlateArr = [];
const regNum = RegNumbers();

addBtn.addEventListener("click", function () {
  let firstRegNum = document.querySelector(".first-reg-num");
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

    //create new element
    let newNumberPlateEl = document.createElement("div");
    // populate new element with text from the input
    newNumberPlateEl.textContent = numberPlate;
    // add class name
    newNumberPlateEl.classList.add("reg-num");
    // push new div element to array
    numberPlateArr.push(newNumberPlateEl.outerHTML);
    // adds new div element to localstorage
    localStorage.setItem("number plate", JSON.stringify(numberPlateArr));
    // create new div element
    let finalEl = document.createElement("div");
    // set new div element with div from localstorage, returning a nested div
    finalEl.innerHTML = numberPlateArr[numberPlateArr.length - 1]; // always get last element add to the array
    // appends the actual from localStorage element to the parentEl
    parentEl.insertBefore(finalEl.firstChild, firstRegNum);
  }
  inputRegNum.value = "";
});

filterBtn.addEventListener("click", function () {
  regNum.getRegNumbersMap();
  if (selectMenu.value !== "") {
    alert(regNum.selectedTown(selectMenu.value));
  }
});
clearBtn.addEventListener("click", function () {
  // clear textContent of newNumberPlateEl
  // removeAll newNumberPlateEl
  // hide parent element
  // call the clearMap method
  // call the clearFilteredTown method
  // parentEl.textContent = localStorage.getItem("number plate");
});
