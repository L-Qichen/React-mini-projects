import { useState } from 'react'
import Title from './Title'
import data from './data'
import './style.css'

function App() {
  const [menu, setMenu] = useState(data);
  console.log(menu);

  return (
    <article className='menu'>
      <Title />
    </article>
  )
}

export default App
