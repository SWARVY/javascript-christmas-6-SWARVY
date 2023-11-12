import MonthlyEvent from '../domain/MonthlyEvent.js';
import deepFreeze from '../utils/deepFreeze.js';

// 날짜, 총 주문 금액, 주문 리스트
const ChristmasEventService = deepFreeze({
  /**
   * @type {MonthlyEvent}
   */
  monthlyEvent: MonthlyEvent.of(),

  initialize(day) {
    this.monthlyEvent.validate(Number(day));
  },

  applyEvents(orderList, orderTotal) {
    return this.monthlyEvent.apply(orderList, orderTotal);
  },

  totalResults(eventList, orderTotal, totalEventDiscount) {
    return {
      payTotal: this.monthlyEvent.payResult(eventList, orderTotal),
      badge: this.monthlyEvent.badge(totalEventDiscount),
    };
  },
});

export default ChristmasEventService;
