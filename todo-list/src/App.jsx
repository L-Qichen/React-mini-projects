import { useState } from 'react'
import Form from './Form'
import Items from './Items'
import { v4 as uuid } from 'uuid';
import './App.css'



const setLocalStorage = (itemList) => {
  localStorage.setItem("list", JSON.stringify(itemList));

}

const defaultList = JSON.parse(localStorage.getItem("list") || '[]');

function App() {
  const [itemList, setItemList] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: uuid(),
    }
    const newItemList = [...itemList, newItem]
    setItemList(newItemList);
    setLocalStorage(newItemList);
  }

  const removeItem = (itemId) => {
    const newItemList = itemList.filter((item) => item.id !== itemId);
    setItemList(newItemList);
    setLocalStorage(newItemList);
  }

  const editItem = (itemId) => {
    const newItemList = itemList.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      };
      return item;
    });
    setItemList(newItemList);
    setLocalStorage(newItemList);
  }

  return (
    <div className='main'>
      <Form addItem={addItem} />
      <Items itemList={itemList} removeItem={removeItem} editItem={editItem} />
    </div>
  )
}

export default App;
