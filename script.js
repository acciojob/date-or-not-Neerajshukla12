var isDate = function (input) {
  // Check if input is a Date object and valid
  if (input instanceof Date && !isNaN(input)) {
    return true;
  }

  // If input is a string or number, try parsing it as a date
  const parsedDate = new Date(input);
  return !isNaN(parsedDate);
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
