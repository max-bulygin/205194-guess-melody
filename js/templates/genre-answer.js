export default (answers) => `<form class="genre">
  ${[...answers].map((answer, index) => {
    return `<div class="genre-answer">
      <div class="player-wrapper">
        <div class="player">
          <audio
            src="${answer.src}"
            preload="auto"></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <input type="checkbox" name="answer" value="answer-${index}" id="a-${index}">
      <label class="genre-answer-check" for="a-${index}"></label>
    </div>`;
  }).join(``)}

    <button class="genre-answer-send" type="submit" disabled>Ответить</button>
  </form>`;
