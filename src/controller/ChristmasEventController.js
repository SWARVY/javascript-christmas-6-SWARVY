import InputView from '../InputView.js';
import OutputView from '../OutputView.js';
import ChristmasEventService from '../service/ChristmasEventService.js';
import ChristmasOrderService from '../service/ChristmasOrderService.js';

export default class ChristmasEventController {
  /**
   * @private
   */
  #services = {
    christmasOrderService: ChristmasOrderService,
    christmasEventService: ChristmasEventService,
  };

  constructor() {
    OutputView.printWelcome();
  }

  /**
   * @async
   * @private
   */
  async start() {
    let visitDayInput;

    await this.#handleError(async () => {
      visitDayInput = await InputView.readVisitDay();
      this.#services.christmasEventService.initialize(visitDayInput);
    });

    await this.#handleError(async () => {
      const orderInput = await InputView.readOrder();
      this.#services.christmasOrderService.initialize(orderInput);
    });

    this.#printOrderSheetBeforeEvent(visitDayInput);
  }

  /**
   * @async
   * @private
   * @param {() => void} action - 실행 시킬 콜백 함수
   */
  async #handleError(action) {
    try {
      await action();
    } catch ({ message }) {
      OutputView.print(message);
      await this.#handleError(action);
    }
  }

  /**
   * @private
   * @param {string} visitDayInput - 입력된 방문 날짜
   */
  #printOrderSheetBeforeEvent(visitDayInput) {
    const { orderList, orderTotal } =
      this.#services.christmasOrderService.orderMenu();

    OutputView.printVisitDay(visitDayInput);
    OutputView.printOrderMenu(orderList);
    OutputView.printTotalPriceBeforeEvent(orderTotal);

    this.#printOrderSheetAfterEvent(orderList, orderTotal);
  }

  /**
   * @private
   * @param {import('../utils/JSDocs.js').orderList} orderList - 주문 목록
   * @param {number} orderTotal - 주문 금액 합계
   */
  #printOrderSheetAfterEvent(orderList, orderTotal) {
    const { eventList, totalEventDiscount, present } =
      this.#services.christmasEventService.applyEvents(orderList, orderTotal);

    OutputView.printPresent(present);
    OutputView.printAppliedEventList(eventList);
    OutputView.printTotalDiscount(totalEventDiscount);

    this.#printFinalResults(eventList, orderTotal, totalEventDiscount);
  }

  /**
   * @private
   * @param {import('../utils/JSDocs.js').eventList} eventList - 적용된 이벤트 목록
   * @param {number} orderTotal - 주문 금액 합계
   * @param {number} totalEventDiscount - 적용된 이벤트 할인 금액 합계
   */
  #printFinalResults(eventList, orderTotal, totalEventDiscount) {
    const { payTotal, badge } =
      this.#services.christmasEventService.totalResults(
        eventList,
        orderTotal,
        totalEventDiscount
      );

    OutputView.printTotalPriceAfterEvent(payTotal);
    OutputView.printEventBadge(badge);
  }
}
