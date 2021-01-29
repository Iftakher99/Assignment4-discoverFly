// variable
const firstClassTicketIncreaseBtn = document.getElementById(
  "first_class-ticket-increase"
);
const firstClassTicketDecreaseBtn = document.getElementById(
  "first_class-ticket-decrease"
);
const economyTicketIncreaseBtn = document.getElementById(
  "economy_class-ticket-increase"
);
const economyTicketDecreaseBtn = document.getElementById(
  "economy_class-ticket-decrease"
);
const bookingBtn = document.getElementById("booking_btn");
//Event Loader
firstClassTicketIncreaseBtn.addEventListener("click", function () {
  handleTicketChange("first_class-ticket", true, true);
});
firstClassTicketDecreaseBtn.addEventListener("click", function () {
  handleTicketChange("first_class-ticket", false, true);
});
economyTicketIncreaseBtn.addEventListener("click", function () {
  handleTicketChange("economy_class-ticket", true, false);
});
economyTicketDecreaseBtn.addEventListener("click", function () {
  handleTicketChange("economy_class-ticket", false, false);
});
bookingBtn.addEventListener("click", function () {
  const economyClassCount = getInputValue("economy_class-ticket");
  const firstClassCount = getInputValue("first_class-ticket");
  alert(
    "You have booked " +
      (economyClassCount + firstClassCount) +
      " tickets " +
      "And Your Cost is " +
      document.getElementById("grand_total").innerText
  );
});

//Event Function
function handleTicketChange(id, isIncrease, isClassic) {
  const ticket = document.getElementById(id + "-count");
  const ticketCount = parseInt(ticket.value);

  // const newTicketCount = ticketCount + 1;
  let newTicketCount = 0;
  if (isIncrease == true) {
    newTicketCount = ticketCount + 1;
  }
  if (isIncrease == false && ticketCount > 0) {
    newTicketCount = ticketCount - 1;
  }
  document.getElementById(id + "-count").value = newTicketCount;
  let ticketPrice = 0;
  if (isClassic == true) {
    ticketPrice = newTicketCount * 150;
  }
  if (isClassic == false) {
    ticketPrice = newTicketCount * 100;
  }
  calculateTotal();
}
function calculateTotal() {
  const firstClassCount = getInputValue("first_class-ticket");

  const economyClassCount = getInputValue("economy_class-ticket");
  const totalPrice = firstClassCount * 150 + economyClassCount * 100;

  document.getElementById("sub_total").innerText = "$" + totalPrice;
  const tax = totalPrice * 0.1;
  document.getElementById("vat_total").innerText = "$" + tax;
  const grandTotal = totalPrice + tax;
  console.log(grandTotal);
  document.getElementById("grand_total").innerText = grandTotal;
}

function getInputValue(id) {
  const ClassInput = document.getElementById(id + "-count");
  const ClassCount = parseInt(ClassInput.value);
  return ClassCount;
}
//final
