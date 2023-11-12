import ChristmasEventController from './controller/ChristmasEventController.js';

class App {
  #christmasEventController;

  constructor() {
    this.#christmasEventController = new ChristmasEventController();
  }

  async run() {
    this.#christmasEventController.start();
  }
}

export default App;
