document.getElementById("btn-withdraw").addEventListener('click', function(){
const newWithdrawAmount = getInputFieldValueById("withdraw-field");
const previousWithdrawTotalAmount = getTextElementValueById("total-withdraw");
const totalWithdrawAmount = previousWithdrawTotalAmount + newWithdrawAmount;

setTextElementValueById("total-withdraw", totalWithdrawAmount);

const previousTotalBalance = getTextElementValueById("total-balance");
const newTotalBalance = previousTotalBalance - newWithdrawAmount;
setTextElementValueById("total-balance", newTotalBalance);
});