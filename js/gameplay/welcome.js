/**
 * Приветствие
 *
 * @module gameplay/welcome
 */

import {renderNextScreen} from '../util';
import {initialState as initial, SCREENS} from "../data/game-data";
import WelcomeView from '../view/welcome-view';

const welcome = new WelcomeView(SCREENS.welcome);
welcome.onStart = () => {
  renderNextScreen(Object.assign({}, initial));
};

export default () => welcome;
