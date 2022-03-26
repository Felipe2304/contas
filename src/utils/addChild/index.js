export const addChild = (children, $element) => {
  children.forEach((nameChildren) => {
    $element.appendChild(nameChildren);
  });
};
