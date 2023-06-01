/* ===== HANDLEBARS JS ===== */
let templateRegNum = document.querySelector("#template").innerHTML;
let templateFunctionRegNum = Handlebars.compile(templateRegNum);
let regNumContainer = document.querySelector(".reg-num-container-handlebars");

const handlebarsErrorMsgEl = document.querySelector(".error-msg-handlebars");
const handlebarsInputRegNum = document.querySelector(".text-input-handlebars");
const handlebarsParentEl = document.querySelector(
  ".reg-num-container-handlebars"
);
const handlebarsMessageEl = document.querySelector(".msg-handlebars");
const handlebarsAddBtn = document.querySelector(".add-btn-handlebars");
const handlebarsFilterBtn = document.querySelector(".filter-btn-handlebars");
const handlebarsClearBtn = document.querySelector(".clear-btn-handlebars");
const handlebarsSelectMenu = document.querySelector(".select-handlebars");

// numberPlateFromLocalStorageObj
const handlebarsRegNum = HandlebarsRegNum();

function addBtnFunction() {
  handlebarsRegNum.setRegNum(handlebarsInputRegNum.value);
  handlebarsRegNum.validRegNum();
  // let registration_numeber1 = handlebarsRegNum.validRegNum();
  //set local storage here
  localStorage.setItem(
    "handlebarsNumPlate",
    JSON.stringify(handlebarsRegNum.getRegNumbersMap())
  );
  let registration_numeber1 = JSON.parse(
    localStorage.getItem("handlebarsNumPlate")
  );
  /* UPDATE THE HANDLEBARS CONTEXT */
  let contextRegNum = {
    //get local storage here
    registration_number: Object.keys(registration_numeber1),
  };
  const htmlRegNum = templateFunctionRegNum(contextRegNum);
  const newDiv = document.createElement("div");
  newDiv.classList.add("handlebars-reg-num");
  const firstRegNum = document.querySelector(".handlebars-reg-num");
  newDiv.innerHTML = htmlRegNum;
  regNumContainer.insertBefore(newDiv.firstElementChild, firstRegNum);
  handlebarsInputRegNum.value = "";
  console.log(htmlRegNum);
}

handlebarsAddBtn.addEventListener("click", addBtnFunction);
