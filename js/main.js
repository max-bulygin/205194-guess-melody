(function () {

  const appContainer = document.querySelector(`.app`);

  // check browser support for <template> element
  if (`content` in document.createElement(`template`)) {

    const templates = document.getElementById(`templates`);

    // collect all game screens
    const screens = templates.content.querySelectorAll(`.main`);

    const showScreen = (id) => {
      appContainer.replaceChild(screens[id], appContainer.querySelector(`.main`));
    };

    let i = 0;

    // show initial screen
    showScreen(i);

    document.addEventListener(`keydown`, (evt) => {
      if (evt.altKey && (evt.keyCode === 39 || evt.keyCode === 37)) {
        if (evt.keyCode === 39 && i < screens.length - 1) {
          i++;
        } else if (evt.keyCode === 37 && i > 0) {
          i--;
        }
        showScreen(i);
      }
    });

  } else {
    // show message that game couldn't be launched
  }

})();
