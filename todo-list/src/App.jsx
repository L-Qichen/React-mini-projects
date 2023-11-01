import { useState } from 'react'
import Form from './Form'
import Items from './Items'
import { v4 as uuid } from 'uuid';
import './App.css'

function App() {
  const [itemList, setItemList] = useState([]);
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: uuid(),
    }
    setItemList([...itemList, newItem]);
  }

  return (
    <div className='main'>
      <Form addItem={addItem} />
      <Items itemList={itemList} />
    </div>
  )
}

export default App
