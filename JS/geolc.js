
// Get the user's time zone name
var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// Create a formatter object with the desired options
var formatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "long",
  timeZone: timeZone,
  hour12: false,
});
// Format the date object using the formatter
var userTime = formatter.format(date);
// Print the result
console.log(userTime);
// For example, userTime = "08:16:16 West Africa Standard Time"

// Using the Date object
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1; // Months are zero-based
var day = date.getDate();
console.log("User's Date: ", year, month, day);
// For example, date = 2024, 1, 20

