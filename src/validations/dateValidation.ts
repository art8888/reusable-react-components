export const isValidISODate = (value: string): boolean => {
  const regex = /^(\d{4})-(\d{2})-(\d{2})$/;

  const match = value.match(regex);

  if (!match) {
    return false;
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
};
