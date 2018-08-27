/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars
const store = (function() {
  // store function
  let items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

  return {
    items: items,
    hideCheckedItems: hideCheckedItems,
    searchTerm: searchTerm
  };
})();
