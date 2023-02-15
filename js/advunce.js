function getInputFiledValueById(inputeFieldId){
  const inputsFieldId = document.getElementById(inputeFieldId);
  const inputFieldValue = inputsFieldId.value;
  inputsFieldId.value = '';
  return inputFieldValue;
};

function getTextElementValueById(elementId,){
  const elementsId = document.getElementById(elementId);
  const elementValue = elementsId.innerText;
  return elementValue;
};

function setTextElementValueById(elementId, newValue){
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
};

document.getElementById('btn-discount').addEventListener('click', function(){
  const price = getTextElementValueById("price");

const discountCode  = getInputFiledValueById("discount-code");
if(discountCode  === "DISC30"){
  let discountedPrice = price - (price * 0.3);
  setTextElementValueById("price", discountedPrice);
  return
};
alert("Wrong Coupon code");

});