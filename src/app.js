const input5El = document.getElementById("input_5");
var today = new Date();
var date =
  today.getDate() +
  " / " +
  (today.getMonth() + 1) +
  " / " +
  today.getFullYear();

input5El.placeholder = date;
