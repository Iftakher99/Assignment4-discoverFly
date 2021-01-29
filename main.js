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
const subTotal = document.getElementById("sub_total");
const vat = document.getElementById("vat_total");
const total = document.getElementById("total");

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
  const totalCost = (subTotal.innerText = ticketPrice);
  const vatCount = totalCost * 0.1;
  const vatTotal = (vat.innerText = vatCount);
  const finalTotal = "$" + parseInt(totalCost + vatTotal);
  total.innerText = finalTotal;
}
