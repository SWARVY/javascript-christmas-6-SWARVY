import { EVENT_LIST } from '../constants/DecemberEventList.js';

/**
 * @param {string} targetEventName - 찾을 이벤트 이름
 * @returns {import('../utils/JSDocs.js').event | 0} 찾은 이벤트 데이터
 */
const getEventInformationByEventName = (targetEventName) => {
  const find = EVENT_LIST.find((event) => event.name === targetEventName);

  return find || 0;
};

export default getEventInformationByEventName;
