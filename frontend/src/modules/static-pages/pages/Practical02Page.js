import { useState } from 'react';
import { useTodoList } from 'src/modules/todo/hooks';
import { Box, Button, Heading, Input } from 'src/shared/design-system';

export function Practical02Page() {
  const { items, addItem, setItemCompleted } = useTodoList();
  const [newItemName, setNewItemName] = useState('');

  return (
    <Box>
      <Heading>Practical 02</Heading>
      <form
        onSubmit={(event) => {
          // Prevent reloading the page on submit (default browser behaviour)
          event.preventDefault();

          // Add the item to the to-do list state
          addItem(newItemName);

          // Clear the input field
          setNewItemName('');
        }}
      >
        <Input
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
          type="text"
          placeholder="What needs to be done?"
        />
        <Button type="submit">Add</Button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                onChange={() => setItemCompleted(item.id, !item.isCompleted)}
                checked={item.isCompleted}
              />{' '}
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    </Box>
  );
}
