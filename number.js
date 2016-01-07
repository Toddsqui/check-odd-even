window.onload = function () {
  var numberInputElement = document.getElementById("numberInput");

  function checkNumber() {
    if (numberInputElement.value % 2 == 0) {
      alert("This number is even");
    } else {
      alert("This number is odd");
    }
  }

  // Handle the click on the button
  document.getElementById("checkNumberBtn").onclick = checkNumber;

  // Handle the enter keypress
  numberInputElement.onkeyup = function(e) {
    // When we press Enter, the keyCode will be 13
    // If it's NOT 13, just return, and do NOT call the checkNumber
    if (e.keyCode !== 13) {
      return;
    }
    checkNumber();
  };
}
