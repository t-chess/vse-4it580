import { useEffect, useState } from 'react';
import { useTodoList } from 'src/modules/todo/hooks';
import { Box, Button, Heading, Input } from 'src/shared/design-system';
import {DeleteIcon} from '@chakra-ui/icons'; 
import { Checkbox, HStack, Tab, TabList, Tabs } from '@chakra-ui/react';

export function Practical02Page() {
  const { items, addItem, setItemCompleted, deleteItem } = useTodoList();
  const [newItemName, setNewItemName] = useState('');
  const [filteredItems, setFilteredItems] = useState(items)

  const STATES = ['all', 'completed', 'not-completed'];
  const [filter, setFilter] = useState('all');

  useEffect(() => {
      setFilteredItems(()=>{
        if (filter=='all') {return items};
        if (filter=='completed') {return items.filter(i=>i.isCompleted)};
        if (filter=='not-completed') {return items.filter(i=>!i.isCompleted)};
      })
  },[filter])

  return (
    <Box>
      <Heading>Practical 02</Heading>
      <form onSubmit={(e)=>{
        e.preventDefault();
        addItem(newItemName);
        setNewItemName('');
      }}>
        <Input value={newItemName} onChange={(e)=>{setNewItemName(e.target.value)}} type="text" placeholder="What needs to be done?" />
        <Button marginBottom='25px' type="submit">Add</Button>
      </form>
      <Tabs
        index={STATES.indexOf(filter)}
        onChange={(index) => setFilter(STATES[index])}
        variant="soft-rounded"
        colorScheme="blue"
      >
        <TabList>
          <Tab>All</Tab>
          <Tab>Completed</Tab>
          <Tab>Not completed</Tab>
        </TabList>
      </Tabs>
      <Box w='500px' border='1px' borderColor='gray.300' borderRadius='lg' p='10px' marginTop='25px'>
        {filteredItems.map((item) => (
          <HStack _hover={{bg:'gray.100'}} role="group" align='center' w='100%' justify='space-between' px='5px' py='10px' key={item.id}>
            <Checkbox as={item.isCompleted ? 'del' : ''} onChange={()=>{setItemCompleted(item.id, !item.isCompleted)}} key={item.id} checked={item.isCompleted}>{item.name}</Checkbox> 
            <DeleteIcon opacity='0%' _groupHover={{opacity:'100%'}} bg='red.500' w='30px' h='30px' p='7px' borderRadius='5px' color='white' onClick={()=>{deleteItem(item.id)}} ></DeleteIcon>
          </HStack>
        ))}
      </Box>
    </Box>
  );
}