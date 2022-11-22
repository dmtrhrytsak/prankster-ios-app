const today = (): Date => new Date();

type Compare = {
  (date1: Date, date2: Date): number;
  (date1: string, date2: string): number;
};

const compare: Compare = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return d1.getTime() - d2.getTime();
};

const isSameDay = (date1: Date, date2: Date): boolean =>
  date1.getDate() === date2.getDate() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getFullYear() === date2.getFullYear();

export const DateUtils = {
  today,
  isSameDay,
  compare,
};
