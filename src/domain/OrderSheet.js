import getItemInformationByItemName from '../utils/getItemInformationByItemName.js';

export default class OrderSheet {
  /**
   * @type {{ orderItemName: string, orderItemAmount: number }[]}
   */
  #orderList;

  /**
   * @static
   * @param {{ orderItemName: string, orderItemAmount: number }[]} orderList
   * @returns {OrderSheet}
   */
  static of() {
    return new OrderSheet();
  }

  /**
   * @param {{ orderItemName: string, orderItemAmount: number }[]} OrderList
   */
  validate(orderList) {
    // validation 진행
    this.#orderList = orderList;
  }

  /**
   * @returns {{ orderList: { orderItemName: string, orderItemAmount: number }[], orderTotal: number }}
   */
  order() {
    return { orderList: this.#orderList, orderTotal: this.#calculate() };
  }

  /**
   * @returns {number}
   */
  #calculate() {
    return this.#orderList.reduce(
      (total, { orderItemName, orderItemAmount }) => {
        const orderItemInformation =
          getItemInformationByItemName(orderItemName);

        return total + orderItemInformation.price * orderItemAmount;
      },
      0
    );
  }
}
