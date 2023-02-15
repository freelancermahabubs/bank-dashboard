function getInputFieldValueById(inputFieldId){
  const inputField = document. getElementById(inputFieldId);
  const newDepositTotalString = inputField.value;
  const newDepositTotal = parseFloat(newDepositTotalString);
  inputField.value = '';
  return newDepositTotal;
  };
  
  function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const newTextElementDepositTotalString = textElement.innerText;
    const newTextElementDepositTotal = parseFloat(newTextElementDepositTotalString);
    textElement.value = '';
    return newTextElementDepositTotal;
  };
  
  function setTextElementValueById(elementId, newValue){
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
  };
  