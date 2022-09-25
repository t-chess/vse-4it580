const items = [
  {
    id: 1,
    name: 'go grocery shopping',
  },
  {
    id: 2,
    name: 'wash the dishes',
  },
  {
    id: 3,
    name: 'write some React code',
  },
];

export function useTodoList() {
  const addItem = () => {
    // TODO
  };

  const setItemCompleted = () => {
    // TODO
  };

  const removeCompletedItems = () => {
    // TODO
  };

  return {
    items,
    addItem,
    setItemCompleted,
    removeCompletedItems,
  };
}
