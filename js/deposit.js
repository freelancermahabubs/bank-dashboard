
document.getElementById('btn-deposit').addEventListener('click', function(){

const newDepositTotal = getInputFieldValueById("deposit-field")

const previousTotalDepositValue = getTextElementValueById('total-deposit');
const totalDepositAmount = newDepositTotal + previousTotalDepositValue;
setTextElementValueById('total-deposit', totalDepositAmount)

const previousTotalBalance = getTextElementValueById("total-balance");
const totalBalance = previousTotalBalance + newDepositTotal;
setTextElementValueById("total-balance", totalBalance);
});