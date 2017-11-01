/**
 * Результат игры: выигрыш
 *
 * @module gameplay/win
 */

import {showScreen} from '../util';
import {SCREENS} from "../data/game-data";
import welcome from './welcome';
import WinView from '../view/win-view';

const win = (game) => {
  const view = new WinView(game, SCREENS.winner);
  view.onReplay = () => {
    showScreen(welcome());
  };
};

export default win;
