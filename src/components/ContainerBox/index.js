import { createElement } from '../../utils/createElements/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
importCSS('./src/components/containerBox/style.css');

export const ContainerBox = (className) => {
  const $containerBox = createElement({
    tagName: 'div',
    className: ['container-box'],
  });

  if (className) $containerBox.classList.add(className);

  return $containerBox;
};
