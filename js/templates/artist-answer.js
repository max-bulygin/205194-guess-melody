export default (answers) => `<form class="main-list">
  ${[...answers].map((answer, index) => {
    return `<div class="main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="val-${index}"/>
      <label class="main-answer" for="answer-${index}">
        <img class="main-answer-preview" src="${answer.image}"
             alt="${answer.artist}" width="134" height="134">
        ${answer.artist}
      </label>
    </div>`;
  }).join(``)}
</form>`;
