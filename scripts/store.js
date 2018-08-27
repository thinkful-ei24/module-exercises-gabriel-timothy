/* global Item, cuid */

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

  const findById = function(id) {
    items.find(item => {
      return item.id === id;
    });
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      const newItem = Item.create(name);
      this.items.push(newItem);
    } catch (error) {
      console.log('addItem error');
      console.log(`${error.message}`);
    }
  };

  const findAndToggleChecked = function(id) {
    const itemToToggle = this.findById(id);
    if (itemToToggle.checked === false) {
      itemToToggle.checked = true;
    } else {
      itemToToggle.checked = false;
    }
  };

  const findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(newName);
      const itemToUpdate = findById(id);
      itemToUpdate.name = newName;
    } catch (error) {
      console.log(`Cannot update name: ${error.message}`);
    }
  };

  const findAndDelete = function(id) {
    this.items.filter(item => {
      return item.id !== id;
    });
  };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };
})();
