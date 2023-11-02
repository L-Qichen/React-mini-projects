import { useState } from 'react'
import Form from './Form'
import Items from './Items'
import { v4 as uuid } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    const newItemList = [...itemList, newItem];
    setItemList(newItemList);
    setLocalStorage(newItemList);
    toast.success('item added to the list');
  }

  const removeItem = (itemId) => {
    const newItemList = itemList.filter((item) => item.id !== itemId);
    setItemList(newItemList);
    setLocalStorage(newItemList);
    toast.success('item deleted');
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
      <ToastContainer position='top-center' />
      <Form addItem={addItem} />
      <Items itemList={itemList} removeItem={removeItem} editItem={editItem} />
    </div>
  )
}

export default App;
