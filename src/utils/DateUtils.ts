export const timestampToTime = (timestamp: number) => {
  const date = new Date(timestamp);
  return `${date.getHours()}:${date.getMinutes()}`;
};

export const formatDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const timestampToDate = (timestamp: number) => {
  return new Date(timestamp);
};
