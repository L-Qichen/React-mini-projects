import { useState } from 'react'
import Form from './Form'
import Items from './Items'
import './App.css'

function App() {
  const [itemList, setItemList] = useState([]);
  const addItem = (itemName) => {
    setItemList([...itemList, itemName]);
    console.log(itemList);
  }

  return (
    <div className='main'>
      <Form addItem={addItem} />
      <Items />
    </div>
  )
}

export default App
