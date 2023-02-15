
document.getElementById("btn-discount").addEventListener("click", function(){
const price = document.getElementById("price").innerText;
const disCountPrice = price - (price * 0.3);
document.getElementById("price").innerText = disCountPrice;

});
