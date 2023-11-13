import { DISH_CATEGORY } from '../constants/Dish.js';

/**
 * @param {string} targetItemName
 * @returns {{ name: string, price: number }}
 */
const getItemInformationByItemName = (targetItemName) => {
  let itemInformation;

  DISH_CATEGORY.forEach((category) => {
    const find = category.find((item) => item.name === targetItemName);

    if (find) {
      itemInformation = find;
    }
  });

  return itemInformation || 0;
};

export default getItemInformationByItemName;
