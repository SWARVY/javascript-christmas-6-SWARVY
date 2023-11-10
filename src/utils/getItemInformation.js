import { DISH_CATEGORY } from '../constants/Dish.js';

/**
 * @param {string} targetItemName
 * @returns {{ name: string, price: number }}
 */
const getItemInformationByItemName = (targetItemName) => {
  let itemInformation;

  DISH_CATEGORY.forEach((category) => {
    itemInformation = category.filter((item) => item.name === targetItemName);
  });

  return itemInformation;
};

export default getItemInformationByItemName;
