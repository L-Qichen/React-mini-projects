import { useState } from 'react'
import Title from './Title'
import data from './data'
import Menu from './Menu'
import './style.css'

function App() {
  const [menu, setMenu] = useState(data);
  const categoriesSet = new Set(['all', ...data.map((item) => item.category)]);
  const [categories, setCategories] = useState(categoriesSet);


  return (
    <article className='menu'>
      <Title />
      <Menu menu={menu} />
    </article>
  )
}

export default App
