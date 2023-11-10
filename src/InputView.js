import { Console } from '@woowacourse/mission-utils';
import { EVENT_INPUT_NOTIFICATION_MESSAGE } from './constants/ChristmasEventMessage.js';

const InputView = Object.freeze({
  readLine: (message) => Console.readLineAsync(message),

  readVisitDay: () =>
    InputView.readLine(EVENT_INPUT_NOTIFICATION_MESSAGE.enterVisitDay),

  readOrder: () =>
    InputView.readLine(EVENT_INPUT_NOTIFICATION_MESSAGE.enterOrder),
});

export default InputView;
