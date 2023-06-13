export function getFormattedDate(date) {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

export function getReqDate(date, days) {
  return new Date(date.getDate() - days, date.getMonth(), date.getFullYear());
}
