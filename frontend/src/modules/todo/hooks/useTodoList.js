import { useState } from "react";

const initialItems = [
  {
    id: 1,
    name: 'go grocery shopping',
    isCompleted: false,
  },
  {
    id: 2,
    name: 'wash the dishes',
    isCompleted: false,
  },
  {
    id: 3,
    name: 'write some React code',
    isCompleted: false,
  },
];

export function useTodoList() {
  const [todoState, setTodoState] = useState({
    items: initialItems,
    nexId: initialItems.length + 1,
    filter: 'all',
  });
  const addItem = (name) => {
    setTodoState((prevState)=> {
      const {nextId} = prevState;
      return {
        ...prevState,
        items: [
          ...prevState.items,
          {id: nextId, name}
        ],
        nexId: nextId + 1
      }
    })
  };

  const setItemCompleted = (id, isCompleted) => {
    setTodoState((prevState)=> ({
      ...prevState,
      items: prevState.items.map((item)=>{
        if (item.id===id){
          return {
            ...item,
            isCompleted,
          }
        }
        return item
      })
    }))
  };

  const deleteItem = (id) => {
    setTodoState((prevState)=>({
      ...prevState,
      items: prevState.items.filter(i => i.id !== id)
    }))
  }

  const setFilter = (filter) => {
    setTodoState((prev)=> ({
      ...prev,
      filter,
    }))
  };

  const filteredItems = todoState.items.filter((i)=>{
    if (todoState.filter=='completed') {
      return i.isCompleted;
    }
    if (todoState.filter=='not-completed') {
      return !i.isCompleted;
    }
    return true;
  })

  return {
    items: filteredItems,
    addItem,
    setItemCompleted,
    deleteItem,
    setFilter,
    filter: todoState.filter,
  };
}
