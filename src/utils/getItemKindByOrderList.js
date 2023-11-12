/**
 * @param {{ orderItemName: string, orderItemAmount: number }[]} orderList
 * @param {{ name: string, price: number }[]} category
 * @returns {number}
 */
const getItemKindByItemName = (orderList, category) =>
  orderList.reduce((acc, { orderItemName, orderItemAmount }) => {
    const find = category.find((item) => item.name === orderItemName);

    if (find) {
      return acc + orderItemAmount;
    }
    return acc;
  }, 0);

export default getItemKindByItemName;
