/**
 * @description 3자리수마다 콤마가 찍힌값을 반환
 * @param {number} number
 * @return {string} 
 * */

export const PriceComma = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
