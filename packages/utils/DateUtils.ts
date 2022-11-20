const today = (): Date => new Date();

const isSameDay = (date1: Date, date2: Date): boolean =>
  date1.getDate() === date2.getDate() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getFullYear() === date2.getFullYear();

export const DateUtils = {
  today,
  isSameDay,
};
