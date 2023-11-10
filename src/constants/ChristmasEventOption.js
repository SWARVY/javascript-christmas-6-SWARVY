export const BASIC_EVENT_PERIOD = Object.freeze({
  month: 12,
  startDay: 1,
  endDay: 25,
});

export const D_DAY_EVENT_PERIOD = Object.freeze({
  month: 12,
  startDay: 1,
  endDay: 25,
});

export const D_DAY_EVENT_DISCOUNT_PER_DAY = 100;

export const SPECIAL_EVENT_DAY = Object.freeze([3, 10, 17, 24, 25, 31]);

export const EVENT_OPTION = Object.freeze({
  minimumOrderPrice: 10_000,
  maximumOrderAmount: 20,
});

export const EVENT_BADGE_PRICE = Object.freeze({
  santa: 20_000,
  tree: 10_000,
  start: 5_000,
});

export const PRESENT_EVENT = Object.freeze({
  minimumOrderPrice: 120_000,
  itemName: '샴페인',
  itemAmount: 1,
});
