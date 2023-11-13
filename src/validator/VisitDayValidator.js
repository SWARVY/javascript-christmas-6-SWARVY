import { DATE } from '../constants/Calendar.js';
import { EVENT_ERROR_MESSAGE } from '../constants/ChristmasEventMessage.js';
import ValidationError from '../error/ValidationError.js';
import deepFreeze from '../utils/deepFreeze.js';

const VisitDayValidator = deepFreeze({
  checkValidNumber(day) {
    if (Number.isNaN(day)) {
      throw new ValidationError(EVENT_ERROR_MESSAGE.invalidVisitDay);
    }
  },

  checkValidNumberType(day) {
    if (!Number.isInteger(day)) {
      throw new ValidationError(EVENT_ERROR_MESSAGE.invalidVisitDay);
    }
  },

  checkValidVisitDayRange(day) {
    if (day < DATE.startDay || day > DATE.endDay) {
      throw new ValidationError(EVENT_ERROR_MESSAGE.invalidVisitDay);
    }
  },

  /**
   * @param {number} day
   */
  validateVisitDay(day) {
    this.checkValidNumber(day);
    this.checkValidNumberType(day);
    this.checkValidVisitDayRange(day);
  },
});

export default VisitDayValidator;
