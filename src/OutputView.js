import { Console } from '@woowacourse/mission-utils';
import {
  EVENT_OUTPUT_NOTIFICATION_FORMAT,
  EVENT_OUTPUT_NOTIFICATION_MESSAGE,
} from './constants/ChristmasEventMessage.js';
import { PRESENT_EVENT } from './constants/ChristmasEventOption.js';

const OutputView = {
  print: (message) => Console.print(message),

  printWelcome: () => {
    OutputView.print(EVENT_OUTPUT_NOTIFICATION_MESSAGE.welcome);
  },

  printOrderMenu: (menuList) => {
    OutputView.print(EVENT_OUTPUT_NOTIFICATION_MESSAGE.order);
    menuList.forEach((menu) =>
      OutputView.print(EVENT_OUTPUT_NOTIFICATION_FORMAT.orderMenu(menu))
    );
  },

  printTotalPriceBeforeEvent: (total) => {
    OutputView.print(EVENT_OUTPUT_NOTIFICATION_MESSAGE.totalPriceBeforeEvent);
    OutputView.print(EVENT_OUTPUT_NOTIFICATION_FORMAT.normalPrice(total));
  },

  printEventItem: () => {
    OutputView.print(EVENT_OUTPUT_NOTIFICATION_MESSAGE.eventItem);
    OutputView.print(
      EVENT_OUTPUT_NOTIFICATION_FORMAT.itemAmount(
        PRESENT_EVENT.name,
        PRESENT_EVENT.amount
      )
    );
  },

  printAppliedEventList: (appliedEventList) => {
    OutputView.print(EVENT_OUTPUT_NOTIFICATION_MESSAGE.appliedEventList);
    // 추후 객체 설계에 따라 작성
  },

  printTotalDiscount: (total) => {
    OutputView.print(EVENT_OUTPUT_NOTIFICATION_MESSAGE.totalEventDiscount);
    OutputView.print(EVENT_OUTPUT_NOTIFICATION_FORMAT.discountPrice(total));
  },

  printTotalPriceAfterEvent: (total) => {
    OutputView.print(EVENT_OUTPUT_NOTIFICATION_MESSAGE.totalPriceAfterEvent);
    OutputView.print(EVENT_OUTPUT_NOTIFICATION_FORMAT.discountPrice(total));
  },

  printEventBadge: (badge) => {
    OutputView.print(EVENT_OUTPUT_NOTIFICATION_MESSAGE.eventBadge);
    OutputView.print(badge);
  },
};

export default OutputView;
