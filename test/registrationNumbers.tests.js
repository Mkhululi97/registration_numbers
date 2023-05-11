describe("Testing RegistrationNumber Function", function () {
  it("should set the registration number and return the registration number", function () {
    const regNum = RegNumbers();
    regNum.setRegNum("CJ 456-124");
    assert.equal("CJ 456-124", regNum.getRegNum());
    regNum.setRegNum("CA 45679");
    assert.equal("CA 45679", regNum.getRegNum());
    regNum.setRegNum("CA 24893");
    assert.equal("CA 24893", regNum.getRegNum());
  });
});
