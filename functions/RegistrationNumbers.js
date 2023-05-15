function RegNumbers() {
  let numPlate = "";
  let regNumbersMap = {};
  const regex = /^(CA|CL|CJ|CK|CF)\s\d{3}(-? ?\d{1,3})$/i;
  function setRegNum(input) {
    numPlate = input.toUpperCase();
  }
  function validRegNum() {
    if (regex.test(numPlate)) {
      if (regNumbersMap[numPlate] === undefined) {
        regNumbersMap[numPlate] = 0;
      } else {
        regNumbersMap[numPlate]++;
      }
      if (regNumbersMap[numPlate] < 1) {
        return numPlate;
      } else {
        return;
      }
    }
  }
  function getRegNumberArr() {
    return regNumbersMap;
  }
  function errorMsg() {
    // error message based on existing regNum
    if (regNumbersMap[numPlate] >= 0) {
      return "registration exists";
    }
    // error messages based on input value
    if (numPlate === "") {
      return "please enter a registration number";
    }
    if (!regex.test(numPlate)) {
      return "invalid registration";
    } else {
      return "";
    }
  }
  return {
    setRegNum,
    validRegNum,
    errorMsg,
    getRegNumberArr,
  };
}
