import { useState } from 'react'
import List from "./List"
import data from "./data"
import './style.css'

function App() {
  const [friends, SetFriends] = useState(data);
  console.log(friends);

  return (
    <>
      <div className="main">
        <h2 className='title'>{friends.length} friends in list:</h2>
        <List friends={friends} />
        <button type='button' className='btn' onClick={() => SetFriends([])}>clear all</button>
      </div>
    </>
  )
}

export default App
