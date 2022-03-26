import { addChild } from '../addChild/index.js';

export const createElement = (properties) => {
  const $element = document.createElement(properties.tagName);
  if (properties.className)
    properties.className.forEach((className) => {
      $element.classList.add(className);
    });

  if (properties.textContent) $element.textContent = properties.textContent;
  if (properties.innerHTML) $element.innerHTML = properties.innerHTML;
  if (properties.children) addChild(properties.children, $element);

  return $element;
};
