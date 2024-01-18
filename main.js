// dark and light toggle
var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./assets/images/sun.png";
  } else {
    icon.src = "./assets/images/moon.png";
  }
};

//age calculator

const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn");

//input elements
let isValid = false;
const input_year = document.querySelector("#year");
const input_day = document.querySelector("#day");
const input_month = document.querySelector("#month");

//error elements
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");

//adding eventlistener to the button
submit_btn.addEventListener("click", CalculateDate);

//adding eventlistener to input
input_day.addEventListener("input", (e) => {
  if (+input_day.value > 31) {
    error_day.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_day.textContent = "";
  }
  if (+input_day.value === 0) {
    isValid = false;
    error_day.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    error_day.textContent = "";
  }
});

input_month.addEventListener("input", (e) => {
  if (+input_month.value > 12) {
    error_month.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_month.textContent = "";
  }
  if (+input_month.value === 0) {
    isValid = false;
    error_month.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    error_month.textContent = "";
  }
});

input_year.addEventListener("input", (e) => {
  if (+input_year.value > 2024) {
    error_year.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_year.textContent = "";
  }
  if (+input_year.value === 0) {
    isValid = false;
    error_year.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    error_year.textContent = "";
  }
});

//adding calculation of the result
function CalculateDate() {
  if (isValid) {
    // Convert the input values into a valid date format
    let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
    let birthdayMill = Date.parse(birthday); // Returns the number of milliseconds since January 1, 1970
    console.log(birthdayMill);

    // Calculate the age difference in milliseconds
    let ageDiffMill = Date.now() - birthdayMill;
    console.log(ageDiffMill);

    // Convert the age difference in milliseconds into a date object
    let ageDate = new Date(ageDiffMill);
    console.log(ageDate);

    // Get the age difference in years, months, and days
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDate() - 1;

    //displaying everything
    output_day.textContent = ageDay;
    output_month.textContent = ageMonth;
    output_year.textContent = ageYears;

    // Save the calculated age into local storage
    localStorage.setItem("age_year", ageYears);
    localStorage.setItem("age_month", ageMonth);
    localStorage.setItem("age_day", ageDay);
  } else {
    alert("error");
  }
}

// Load the calculated age from local storage if it exists
window.onload = function () {
  // Get the stored values
  let stored_year = localStorage.getItem("age_year");
  let stored_month = localStorage.getItem("age_month");
  let stored_day = localStorage.getItem("age_day");

  // Display the stored values if they are not null
  if (stored_year !== null) {
    output_year.textContent = stored_year;
  }

  if (stored_month !== null) {
    output_month.textContent = stored_month;
  }

  if (stored_day !== null) {
    output_day.textContent = stored_day;
  }
};