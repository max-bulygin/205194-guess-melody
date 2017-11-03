import welcome from './controller/welcome';
import result from './controller/result';
import level from './controller/level';

const ControllerId = {
  WELCOME: ``,
  LEVEL: `level`,
  RESULT: `result`
};

const saveGame = (data) => JSON.stringify(data);
const loadGame = (data) => JSON.parse(data);

export default class Application {

  static init(state) {
    Application.routes = {
      [ControllerId.WELCOME]: welcome,
      [ControllerId.LEVEL]: level(state),
      [ControllerId.RESULT]: result
    };

    const hashChangeHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`?`);
      Application.changeHash(id, data);
    };
    window.onhashchange = hashChangeHandler;
    hashChangeHandler();
  }

  static changeHash(id, data) {
    const controller = Application.routes[id];
    if (controller) {
      controller.init(loadGame(data));
    }
  }

  static showWelcome() {
    location.hash = ControllerId.WELCOME;
  }

  static showLevel(state) {
    location.hash = `${ControllerId.GAME}?${saveState(state)}`;
  }

  static showResult(game) {
    result.init(game);
  }
}
