import { MONTHS } from "../constants";

export const getTotal = (arr) => {
  const sum = arr
    .filter((mov) => mov.is_redemption)
    .reduce(function (prev, current) {
      return prev + +current.points;
    }, 0);
  const rest = arr
    .filter((mov) => mov.is_redemption === false)
    .reduce(function (prev, current) {
      return prev + +current.points;
    }, 0);
  const result = (sum - rest).toLocaleString("en");
  return result;
};

export const formatDate = (fecha) => {
  const dateFormat =
    fecha.slice(8, 10) +
    " de " +
    MONTHS[fecha.slice(5, 7)] +
    ", " +
    fecha.slice(0, 4);

  return dateFormat;
};
