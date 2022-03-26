import { importCSS } from '../../utils/importCSS/index.js';
import { createElement } from '../../utils/createElements/index.js';

importCSS('./src/components/Header/styles.css');

export const Header = () => {
  const $balanceText = createElement({
    tagName: 'span',
    className: ['balance-text'],
    innerHTML: '<strong>R$  </strong> 100.000,00 ',
  });

  const $balanceWrapper = createElement({
    tagName: 'div',
    className: ['balance-wrapper'],
    children: [$balanceText],
  });

  const $header = createElement({
    tagName: 'header',
    className: ['header'],
    children: [$balanceWrapper],
  });

  return $header;
};
