import InputView from '../InputView.js';
import OutputView from '../OutputView.js';
import ChristmasEventService from '../service/ChristmasEventService.js';
import ChristmasOrderService from '../service/ChristmasOrderService.js';

export default class ChristmasEventController {
  #services = {
    christmasOrderService: ChristmasOrderService,
    christmasEventService: ChristmasEventService,
  };

  constructor() {
    OutputView.printWelcome();
  }

  async start() {
    let visitDayInput;

    await this.#handleError(async () => {
      visitDayInput = await this.#readVisitDayInput();
      this.#services.christmasEventService.initialize(visitDayInput);
    });

    await this.#handleError(async () => {
      const orderInput = await this.#readOrderInput();
      this.#services.christmasOrderService.initialize(orderInput);
    });

    this.#printOrderSheetBeforeEvent(visitDayInput);
  }

  // eslint-disable-next-line class-methods-use-this
  async #readVisitDayInput() {
    const visitDayInput = await InputView.readVisitDay();
    return visitDayInput;
  }

  // eslint-disable-next-line class-methods-use-this
  async #readOrderInput() {
    const orderInput = await InputView.readOrder();
    return orderInput;
  }

  async #handleError(action) {
    try {
      await action();
    } catch ({ message }) {
      OutputView.printError(message);
      await this.#handleError(action);
    }
  }

  #printOrderSheetBeforeEvent(visitDayInput) {
    const { orderList, orderTotal } =
      this.#services.christmasOrderService.orderMenu();

    OutputView.printVisitDay(visitDayInput);
    OutputView.printOrderMenu(orderList);
    OutputView.printTotalPriceBeforeEvent(orderTotal);

    this.#printOrderSheetAfterEvent(orderList, orderTotal);
  }

  #printOrderSheetAfterEvent(orderList, orderTotal) {
    const { eventList, totalEventDiscount, present } =
      this.#services.christmasEventService.applyEvents(orderList, orderTotal);

    OutputView.printPresent(present);
    OutputView.printAppliedEventList(eventList);
    OutputView.printTotalDiscount(totalEventDiscount);

    this.#printFinalResults(eventList, orderTotal, totalEventDiscount);
  }

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
