export const convertEpocToLocal = (epoch: number) => {
  let date = new Date(epoch);
  // these get functions will convert date to local time by default
  var timestampString =
    date.getFullYear() +
    "-" +
    formatTimestampElement(date.getMonth() + 1) +
    "-" +
    formatTimestampElement(date.getDate()) +
    " " +
    formatTimestampElement(date.getHours()) +
    ":" +
    formatTimestampElement(date.getMinutes()) +
    ":" +
    formatTimestampElement(date.getSeconds());
  return timestampString;
};

const formatTimestampElement = (number: number) => {
  return number.toString().length == 1
    ? "0" + number.toString()
    : number.toString();
};

export const getYearMonthKey = (epoch: number) => {
  let date = new Date(epoch);
  return date.getFullYear().toString() + date.getMonth().toString();
};
