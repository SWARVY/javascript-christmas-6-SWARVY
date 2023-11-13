import { EVENT_ERROR_MESSAGE } from '../constants/ChristmasEventMessage.js';
import ValidationError from '../error/ValidationError.js';
import deepFreeze from '../utils/deepFreeze.js';

const CommonValidator = deepFreeze({
  checkInputEmpty(input) {
    if (!input) {
      throw new ValidationError(EVENT_ERROR_MESSAGE.invalidInput);
    }
  },

  /**
   * @param {unknown} input
   */
  validateCommon(input) {
    this.checkInputEmpty(input);
  },
});

export default CommonValidator;
