const buttons = document.querySelectorAll(".add-btn");
let count = 1;
let totalPrice = 0;
for (i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener("click", function () {
    // get title of product and show dynamically
    let finalElement = button.previousElementSibling.previousElementSibling;
    let finalElementText = finalElement.innerText;
    let getCartShow = document.getElementById("showProductName");
    let createTag = document.createElement("p");
    getCartShow.appendChild(createTag);
    createTag.innerText = `${count} ${finalElementText}`;
    count++;
    //price calculate and show
    let finalPriceElement = button.previousElementSibling;
    let price = parseFloat(finalPriceElement.innerText.split(" ")[0]);
    totalPrice += price;
    let getTotalShow = document.getElementById("total-price");
    getTotalShow.innerText = totalPrice;

    // coupon input value get and manipulate
    // get input from apply button and add condition for coupon code
    document.getElementById("apply").addEventListener("click", function () {
      let inputField = document.getElementById("input-coupon");
      let inputValue = inputField.value.toUpperCase();
      if (totalPrice >= 200) {
        if (inputValue === "SELL200") {
          let discountElement = document.getElementById("discount");
          let discount = totalPrice * 0.2;
          discountElement.innerText = discount.toFixed(2);

          // total price
          let total = document.getElementById("total");
          let totalPriceForProduct = totalPrice - discount;
          total.innerText = totalPriceForProduct.toFixed(2);
        }
      } else {
        alert("Please Buy Something about 200$ or more for getting Discount");
      }
    });
    // make purchase and show pop-up
    document.getElementById("purchase").addEventListener("click", function () {
      document.getElementById("popup").classList.remove("hidden");
    });
  });
}
