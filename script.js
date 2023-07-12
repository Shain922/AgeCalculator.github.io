var datePicker = document.getElementById("datePicker");
var choseDate = document.getElementById("chooseDate");
//varibles for value
var ageYear = document.getElementById("ageYear");
var ageMonth = document.getElementById("ageMonth");
var ageDays = document.getElementById("ageDays");
var ageHours = document.getElementById("ageHours");
var ageSeconds = document.getElementById("ageSeconds");
var ageMilliSeconds = document.getElementById("ageMilliSeconds");

datePicker.addEventListener("change", function () {
  var options = { year: "numeric", month: "long", day: "numeric" };
  var selectedDate = new Date(this.value);
  var DOB = selectedDate.toLocaleDateString("en-US", options);
  //show the selecterd date
  choseDate.innerText = DOB;
  var milliSeconds_btw_DOB = Date.parse(DOB);
  var milliSeconds_btw_now = Date.now();
  var age_in_milliSeconds = milliSeconds_btw_now - milliSeconds_btw_DOB;
  var milliSeconds = age_in_milliSeconds;
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var month = day * 30;
  var year = day * 365;
  //   calculation
  var years = Math.round(milliSeconds / year);
  var months = years * 12;
  var days = years * 365;
  var hours = Math.round(milliSeconds / hour);
  var seconds = Math.round(milliSeconds / second);
  //   diplay the valuees
  ageYear.innerHTML = years;
  ageMonth.innerHTML = months;
  ageDays.innerHTML = days;
  ageHours.innerHTML = hours;
  ageSeconds.innerHTML = seconds;
  ageMilliSeconds.innerHTML = milliSeconds;

  document.querySelector(".age-calc").classList.add("expand");
});
