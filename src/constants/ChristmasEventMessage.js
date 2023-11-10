import DATE from './Calendar.js';
import { UNIT } from './Symbol.js';

export const EVENT_DISCOUNT_INFORMATION = Object.freeze({
  basic: Object.freeze({
    name: '크리스마스 디데이 할인',
    price: 1_000,
  }),
  special: Object.freeze({
    name: '특별 할인',
    price: 1_000,
  }),
  weekday: Object.freeze({
    name: '평일 할인',
    price: 2_023,
  }),
  weekend: Object.freeze({
    name: '주말 할인',
    price: 2_023,
  }),
  champagne: Object.freeze({
    name: '증정 이벤트',
    price: 25_000,
  }),
});

export const EVENT_INPUT_NOTIFICATION_MESSAGE = Object.freeze({
  enterVisitDay: `${DATE.month}중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해주세요!)\n`,
  enterOrder:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
});

export const EVENT_OUTPUT_NOTIFICATION_MESSAGE = Object.freeze({
  welcome: `안녕하세요! 우테코 식당 ${DATE.month} 이벤트 플래너입니다.`,
  order: '<주문 메뉴>',
  totalPriceBeforeEvent: '<할인 전 총주문 금액>',
  eventItem: '<증정 메뉴>',
  appliedEventList: '<혜택 내역>',
  totalEventDiscount: '<총혜택 금액>',
  totalPriceAfterEvent: '<할인 후 예상 결제 금액>',
  eventBadge: `<${DATE.month}월 이벤트 배지>`,
});

export const EVENT_OUTPUT_NOTIFICATION_FORMAT = Object.freeze({
  visitDay(day) {
    return `${DATE.month}월 ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`;
  },
  orderMenu(menu, amount) {
    return `${menu} ${amount}${UNIT.amount}`;
  },
  appliedEvent(eventName, discountPrice) {
    return `${eventName}: -${discountPrice.toLocaleString()}`;
  },
  itemAmount(itemName, amount) {
    return `${itemName} ${amount}${UNIT.amount}`;
  },
  discountPrice(price) {
    return `-${price.toLocaleString()}${UNIT.won}`;
  },
  normalPrice(price) {
    return `${price.toLocaleString()}${UNIT.won}`;
  },
});
