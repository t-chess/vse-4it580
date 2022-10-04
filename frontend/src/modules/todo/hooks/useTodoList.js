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

  return {
    items: todoState.items,
    addItem,
    setItemCompleted,
    deleteItem,
  };
}
