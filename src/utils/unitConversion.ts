export const formatNumber = (number: number): number | string => {
  return number > 10000 ? number / 1000 + "k" : number;
};
