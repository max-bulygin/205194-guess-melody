/**
 * Приветствие
 *
 * @module gameplay/welcome
 */

import {renderNextScreen, showScreen} from '../util';
import WelcomeView from '../view/welcome-view';
import App from '../application';
import timer from '../timer';

class Welcome {
  constructor() {
    this.view = new WelcomeView();
  }

  init() {
    showScreen(this.view);
    this.view.onStart = () => {
      App.showGame();
      timer.start();
    };
  }
}

export default new Welcome();

// const welcome = new WelcomeView(SCREENS.welcome);
// welcome.onStart = () => {
//   renderNextScreen(Object.assign({}, initial));
//   timer.start();
// };
//
// export default () => welcome;
