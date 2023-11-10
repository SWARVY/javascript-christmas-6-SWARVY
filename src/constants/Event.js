import deepFreeze from '../utils/deepFreeze.js';

export const EVENT_INFORMATION = deepFreeze({
  basic: {
    name: '크리스마스 디데이 할인',
    price: 1_000,
    startDay: 1,
    endDay: 25,
  },
  special: {
    name: '특별 할인',
    price: 1_000,
    startDay: 1,
    endDay: 31,
  },
  weekday: {
    name: '평일 할인',
    price: 2_023,
    startDay: 1,
    endDay: 31,
  },
  weekend: {
    name: '주말 할인',
    price: 2_023,
    startDay: 1,
    endDay: 31,
  },
  champagne: {
    name: '증정 이벤트',
    price: 25_000,
    startDay: 1,
    endDay: 31,
  },
});

export const EVENT_LIST = Object.values(EVENT_INFORMATION);
