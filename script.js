function bookTickets() {
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var date = document.getElementById("date").value;
  var seats = parseInt(document.getElementById("seats").value);

  if (from === "" || to === "" || date === "" || isNaN(seats) || seats < 1) {
    alert("Please enter valid information");
    return;
  }

  var confirmation = confirm(
    "You have selected the following options:\nFrom: " +
      from +
      "\nTo: " +
      to +
      "\nDate: " +
      date +
      "\nNumber of Seats: " +
      seats +
      "\n\nClick OK to confirm booking."
  );

  if (confirmation) {
    alert("Booking successful! Enjoy your trip.");
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
    document.getElementById("date").value = "";
    document.getElementById("seats").value = "";
  }
}