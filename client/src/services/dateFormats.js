function dateShort(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const suffix = getSuffix(day);
  const month = date.toDateString().slice(4, 7);
  const string = day + suffix + " " + month;
  return string;
}

function dateForm (dateString) {
  return new Intl.DateTimeFormat('en-GB')
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { hour: 'numeric', minute: 'numeric', hour12: true };
  const time = date.toLocaleString('en-US', options).toLowerCase();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.getDate();
  const suffix = getSuffix(day);
  const year = date.getFullYear();
  const string = `${time} - ${month} ${day}${suffix}, ${year}`;
  return string;
}

function getSuffix(day) {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

module.exports = { dateShort, formatDate, dateForm };