import { createElement } from '../createElements/index.js';

export const importCSS = (path) => {
  const $link = createElement({ tagName: 'link' });
  $link.setAttribute('rel', 'stylesheet');
  $link.setAttribute('href', path);
  document.head.appendChild($link);
};
