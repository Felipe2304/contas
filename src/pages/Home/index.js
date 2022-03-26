import { importCSS } from '../../utils/importCSS/index.js';
import { Header } from '../../components/Header/index.js';
import { createElement } from '../../utils/createElements/index.js';
import { ContainerBox } from '../../components/ContainerBox/index.js';
import { ItemList } from '../../components/ItemList/index.js';
import { addChild } from '../../utils/addChild/index.js';

importCSS('./src/pages/Home/styles.css');

export const Home = () => {
  const $header = Header();
  const $containerBox1 = ContainerBox('container-box-first');
  const $containerBox2 = ContainerBox('container-box-second');
  const $infoWrapper1 = InfoWrapperHome('13/7');
  const $infoWrapper2 = InfoWrapperHome('12/7');

  const $container = createElement({
    tagName: 'section',
    className: ['home-container'],
    children: [$header, $containerBox1, $containerBox2],
  });

  $containerBox1.appendChild($infoWrapper1);
  $containerBox2.appendChild($infoWrapper2);

  return $container;
};

const InfoWrapperHome = (date) => {
  const $itemList1 = ItemList('round-box-blue');
  const $itemList2 = ItemList('round-box-purple');
  const $itemList3 = ItemList('round-box-red');

  const $date = createElement({
    tagName: 'span',
    className: ['info-wrapper-date'],
    textContent: date,
  });

  const $infoWrapperList = createElement({
    tagName: 'ul',
    className: ['info-wrapper-list'],
    children: [$itemList1, $itemList2, $itemList3],
  });

  const $infoWrapper = createElement({
    tagName: 'div',
    className: ['info-wrapper'],
    children: [$date, $infoWrapperList],
  });

  return $infoWrapper;
};
