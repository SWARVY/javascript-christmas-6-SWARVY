import { EVENT_BADGE } from '../constants/ChristmasEventOption.js';
import {
  DISCOUNT_EVENT_EXCEPTION_LIST,
  EVENT_INFORMATION,
} from '../constants/DecemberEventList.js';
import VisitDayValidator from '../validator/VisitDayValidator.js';
import DecemberEvent from './DecemberEvent.js';

export default class MonthlyEvent {
  /**
   * @type {number}
   */
  #day;

  #events = {
    decemberEvent: DecemberEvent.of(),
  };

  /**
   * @static
   * @param {number} day
   * @returns {MonthlyEvent}
   */
  static of() {
    return new MonthlyEvent();
  }

  /**
   * @param {number} day
   */
  validate(day) {
    VisitDayValidator.validateVisitDay(day);
    this.#day = day;
  }

  /**
   * @param {{ orderItemName: string, orderItemAmount: number }[]} orderList
   * @param {number} orderTotal
   * @returns {{ eventList: { eventName: string, discountPrice: number }[], totalEventDiscount: number }}
   */
  apply(orderList, orderTotal) {
    const eventList = this.#events.decemberEvent.apply(
      this.#day,
      orderList,
      orderTotal
    );

    const present = this.#present(eventList);

    return {
      eventList,
      totalEventDiscount: this.#calculate(eventList),
      present,
    };
  }

  /**
   * @param {{ eventName: string, discountPrice: number }[]} eventList
   * @returns {number}
   */
  // eslint-disable-next-line class-methods-use-this
  #calculate(eventList) {
    return eventList.reduce((acc, { discountPrice }) => acc + discountPrice, 0);
  }

  // eslint-disable-next-line class-methods-use-this
  #present(eventList) {
    return eventList.some(
      ({ eventName }) => eventName === EVENT_INFORMATION.special.name
    );
  }

  // eslint-disable-next-line class-methods-use-this
  payResult(eventList, orderTotal) {
    const discountTotal = eventList.reduce(
      (acc, { eventName, discountPrice }) => {
        if (DISCOUNT_EVENT_EXCEPTION_LIST.includes(eventName)) {
          return acc;
        }

        return acc + discountPrice;
      },
      0
    );

    return orderTotal - discountTotal;
  }

  // eslint-disable-next-line class-methods-use-this
  badge(totalEventDiscount) {
    const find = EVENT_BADGE.find(
      (badge) => badge.require < totalEventDiscount
    );

    return find || 0;
  }
}
