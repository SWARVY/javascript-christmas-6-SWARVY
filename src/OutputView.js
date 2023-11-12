import { Console } from '@woowacourse/mission-utils';
import {
  EVENT_OUTPUT_NOTIFICATION_FORMAT,
  EVENT_OUTPUT_NOTIFICATION_MESSAGE,
} from './constants/ChristmasEventMessage.js';
import { PRESENT_EVENT } from './constants/ChristmasEventOption.js';
import { NONE } from './constants/Symbol.js';

const OutputView = Object.freeze({
  print: (message) => Console.print(message),

  printWelcome() {
    this.print(EVENT_OUTPUT_NOTIFICATION_MESSAGE.welcome);
  },

  printError(message) {
    this.print(message);
  },

  printVisitDay(day) {
    this.print(EVENT_OUTPUT_NOTIFICATION_FORMAT.visitDay(day));
  },

  printOrderMenu(orderList) {
    this.print(EVENT_OUTPUT_NOTIFICATION_MESSAGE.order);
    orderList.forEach(({ orderItemName, orderItemAmount }) =>
      this.print(
        EVENT_OUTPUT_NOTIFICATION_FORMAT.orderMenu(
          orderItemName,
          orderItemAmount
        )
      )
    );
  },

  printTotalPriceBeforeEvent(total) {
    this.print(EVENT_OUTPUT_NOTIFICATION_MESSAGE.totalPriceBeforeEvent);
    this.print(EVENT_OUTPUT_NOTIFICATION_FORMAT.normalPrice(total));
  },

  printPresent(present) {
    this.print(EVENT_OUTPUT_NOTIFICATION_MESSAGE.present);
    this.checkNone(present, () => {
      this.print(
        EVENT_OUTPUT_NOTIFICATION_FORMAT.itemAmount(
          PRESENT_EVENT.itemName,
          PRESENT_EVENT.itemAmount
        )
      );
    });
  },

  printAppliedEventList(eventList) {
    this.print(EVENT_OUTPUT_NOTIFICATION_MESSAGE.appliedEventList);
    this.checkNone(eventList.length, () => {
      eventList.forEach(({ eventName, discountPrice }) => {
        this.print(
          EVENT_OUTPUT_NOTIFICATION_FORMAT.appliedEvent(
            eventName,
            discountPrice
          )
        );
      });
    });
  },

  printTotalDiscount(total) {
    this.print(EVENT_OUTPUT_NOTIFICATION_MESSAGE.totalEventDiscount);

    if (total > 0) {
      this.print(EVENT_OUTPUT_NOTIFICATION_FORMAT.discountPrice(total));
    } else {
      this.print(EVENT_OUTPUT_NOTIFICATION_FORMAT.normalPrice(total));
    }
  },

  printTotalPriceAfterEvent(total) {
    this.print(EVENT_OUTPUT_NOTIFICATION_MESSAGE.totalPriceAfterEvent);
    this.print(EVENT_OUTPUT_NOTIFICATION_FORMAT.normalPrice(total));
  },

  printEventBadge(badge) {
    this.print(EVENT_OUTPUT_NOTIFICATION_MESSAGE.eventBadge);
    this.checkNone(badge, () => {
      this.print(badge.name);
    });
  },

  checkNone(checkValue, action) {
    if (!checkValue) {
      return this.print(NONE);
    }

    return action();
  },
});

export default OutputView;
