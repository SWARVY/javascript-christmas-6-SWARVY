import { EVENT_ERROR_MESSAGE } from '../constants/ChristmasEventMessage.js';
import ValidationError from '../error/ValidationError.js';
import deepFreeze from '../utils/deepFreeze.js';

const CommonValidator = deepFreeze({
  /**
   * @param {unknown} input - 입력 데이터
   * @throws {ValidationError}
   */
  checkInputEmpty(input) {
    if (!input) {
      throw new ValidationError(EVENT_ERROR_MESSAGE.invalidInput);
    }
  },

  /**
   * @param {unknown} input - 입력 데이터
   * @throws {ValidationError}
   */
  validateCommon(input) {
    this.checkInputEmpty(input);
  },
});

export default CommonValidator;
