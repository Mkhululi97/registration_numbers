function RegNumbers() {
  let numPlate = "";
  function setRegNum(input) {
    numPlate = input;
  }

  function getRegNum() {
    return numPlate;
  }
  return {
    setRegNum,
    getRegNum,
  };
}
