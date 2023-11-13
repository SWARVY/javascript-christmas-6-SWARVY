import { WEEK } from '../constants/Calendar.js';
import {
  D_DAY_EVENT_DISCOUNT_PER_DAY,
  EVENT_OPTION,
  PRESENT_EVENT,
  SPECIAL_EVENT_DAY,
} from '../constants/ChristmasEventOption.js';
import { EVENT_INFORMATION } from '../constants/DecemberEventList.js';
import { DESSERT, MAIN_DISH } from '../constants/Dish.js';
import getItemKindByItemName from '../utils/getItemKindByOrderList.js';
import isWeekend from '../utils/isWeekend.js';

export default class DecemberEvent {
  #eventStatus = [];

  static of() {
    return new DecemberEvent();
  }

  /**
   * @param {number} day
   * @param {{ orderItemName: string, orderItemAmount: number }[]} orderList
   * @param {number} orderTotal
   * @returns {{ eventName: string, discountPrice: number }[]}
   */
  apply(day, orderList, orderTotal) {
    const check = isWeekend(day);

    if (orderTotal > EVENT_OPTION.eventMinimumOrderPrice) {
      this.christmasDDayEvent(day);
      this.weekdayEvent(check, orderList);
      this.weekendEvent(check, orderList);
      this.specialEvent(day);
      this.presentEvent(orderTotal);
    }

    return this.#eventStatus;
  }

  christmasDDayEvent(day) {
    if (
      day <= EVENT_INFORMATION.dDay.endDay &&
      day >= EVENT_INFORMATION.dDay.startDay
    ) {
      this.applyEvent(
        EVENT_INFORMATION.dDay.name,
        EVENT_INFORMATION.dDay.price + D_DAY_EVENT_DISCOUNT_PER_DAY * (day - 1)
      );
    }
  }

  weekdayEvent(check, orderList) {
    if (check !== WEEK.weekday) {
      return;
    }

    const selectedAmount = getItemKindByItemName(orderList, DESSERT);

    if (selectedAmount > 0) {
      this.applyEvent(
        EVENT_INFORMATION.weekday.name,
        EVENT_INFORMATION.weekday.price * selectedAmount
      );
    }
  }

  weekendEvent(check, orderList) {
    if (check !== WEEK.weekend) {
      return;
    }

    const selectedAmount = getItemKindByItemName(orderList, MAIN_DISH);

    if (selectedAmount > 0) {
      this.applyEvent(
        EVENT_INFORMATION.weekend.name,
        EVENT_INFORMATION.weekend.price * selectedAmount
      );
    }
  }

  specialEvent(day) {
    if (SPECIAL_EVENT_DAY.includes(day)) {
      this.applyEvent(
        EVENT_INFORMATION.special.name,
        EVENT_INFORMATION.special.price
      );
    }
  }

  presentEvent(orderTotal) {
    if (orderTotal >= PRESENT_EVENT.minimumOrderPrice) {
      this.applyEvent(
        EVENT_INFORMATION.present.name,
        EVENT_INFORMATION.present.price * PRESENT_EVENT.itemAmount
      );
    }
  }

  applyEvent(eventName, discountPrice) {
    this.#eventStatus.push({ eventName, discountPrice });
  }
}
