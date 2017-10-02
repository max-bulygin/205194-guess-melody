const appContainer = document.querySelector(`.app`);

/**
 * Функция принимает строку с разметкой и возвращает DOM элементы
 *
 * @param str
 * @returns {*|Node}
 */

export const stringToElement = (str) => {
  const template = document.createElement(`template`);
  template.innerHTML = str;
  return template.content.firstChild;
};

/**
 * Функция принимает DOM элемент и отображает его
 *
 * @param element
 */

export const showScreen = (element) => {
  appContainer.replaceChild(element, appContainer.querySelector(`.main`));
};
