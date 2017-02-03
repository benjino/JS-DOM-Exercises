//Create a Tip Calculator
//Function to calculate tip.
function alertAmount() {
  //create a variable to take total dollar amount, and parses input to an integer.
  var amountInput = parseInt(document.getElementById("amount").value);
  //gets displayTotal and displays it into h2 tag.
  document.getElementById("displayTotal").innerHTML = "Total: $" + amountInput;
  //take the calculated amount, which is amount * .2
  var tip = amountInput * .2;
  //rounds up to two decimal points: http://www.javascriptkit.com/javatutors/formatnumber.shtml
  var tipDollar = tip.toFixed(2);
  //gets displayTip and displays it into h2 tag.
  document.getElementById("displayTip").innerHTML = "Tip: $" + tipDollar;
};
//function that enables Return key on keyboard to run function.
function onkey(x) {
  if (x.keyCode == 13) {
    alertAmount();
  }
}
