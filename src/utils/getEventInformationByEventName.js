import { EVENT_LIST } from '../constants/DecemberEventList.js';

/**
 * @param {string} targetEventName
 * @returns {{ name: string, price: number, startDay: number, endDay: number }}
 */
const getEventInformationByEventName = (targetEventName) => {
  const find = EVENT_LIST.find((event) => event.name === targetEventName);

  return find || 0;
};

export default getEventInformationByEventName;
