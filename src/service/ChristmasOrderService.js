import { DIVIDER } from '../constants/Symbol.js';
import OrderSheet from '../domain/OrderSheet.js';
import deepFreeze from '../utils/deepFreeze.js';

const ChristmasOrderService = deepFreeze({
  orderSheet: OrderSheet.of(),

  initialize(order) {
    const parsedOrderList = this.parsingOrderString(order);

    this.orderSheet.validate(parsedOrderList);
  },

  /**
   * @returns {{ orderList: { orderItemName: string, orderItemAmount: number }[], orderTotal: number }}
   */
  orderMenu() {
    return this.orderSheet.order();
  },

  /**
   * @param {string} order
   * @returns {{ orderItemName: string, orderItemAmount: number }[]}
   */
  parsingOrderString(order) {
    return order.split(DIVIDER.comma).map((combinedOrder) => {
      const [orderItemName, orderItemAmount] = combinedOrder.split(
        DIVIDER.hyphen
      );

      return { orderItemName, orderItemAmount: Number(orderItemAmount) };
    });
  },
});

export default ChristmasOrderService;
