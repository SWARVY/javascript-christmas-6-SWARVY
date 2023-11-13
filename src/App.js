import ChristmasEventController from './controller/ChristmasEventController.js';

export default class App {
  #christmasEventController;

  constructor() {
    this.#christmasEventController = new ChristmasEventController();
  }

  async run() {
    await this.#christmasEventController.start();
  }
}
