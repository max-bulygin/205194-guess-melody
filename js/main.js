/**
 * Вход в приложение
 *
 * @import {function} showScreen
 * @import {Node} element welcome
 */

import {showScreen} from './util.js';
import {initialState as initial} from "./data/game-data";
import welcome from './gameplay/welcome';

showScreen(welcome(initial));
// getNextScreen(initial, {
//   type: 1,
//   question: `Кто исполняет эту песню?`,
//   src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
//   answers: [
//     {
//       image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
//       artist: `Kevin MacLeod`
//     },
//     {
//       image: `https://i.vimeocdn.com/portrait/992615_300x300`,
//       artist: `Jingle Punks`
//     },
//     {
//       image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
//       artist: `Audionautix`
//     }
//   ]
// });
