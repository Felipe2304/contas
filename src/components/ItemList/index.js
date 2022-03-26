import { createElement } from '../../utils/createElements/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('./src/components/itemList/styles.css');

export const ItemList = (roundClass) => {
  const $roundBox = createElement({
    tagName: 'div',
    className: ['round-box', roundClass],
  });

  const $typeAccountText = createElement({
    tagName: 'span',
    className: ['type-account'],
    textContent: 'Tipo',
  });

  const $textAccount = createElement({
    tagName: 'span',
    className: ['text-account', 'item-list-text'],
    textContent: 'Conta',
  });

  const $infoTypeAccount = createElement({
    tagName: 'div',
    className: ['info-type-account'],
    children: [$typeAccountText, $textAccount],
  });

  const $balancePay = createElement({
    tagName: 'span',
    className: ['balance-pay'],
    textContent: '-100,00',
  });

  const $textPay = createElement({
    tagName: 'span',
    className: ['text-pay', 'item-list-text'],
    textContent: 'não pago',
  });

  const $infoPay = createElement({
    tagName: 'div',
    className: ['info-pay'],
    children: [$balancePay, $textPay],
  });

  const $itemList = createElement({
    tagName: 'li',
    className: ['item-list'],
    children: [$roundBox, $infoTypeAccount, $infoPay],
  });

  return $itemList;
};
