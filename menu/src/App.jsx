import { useState } from 'react'
import Title from './Title'
import Categories from './Categories'
import data from './data'
import Menu from './Menu'
import './style.css'

function App() {
  const [menu, setMenu] = useState(data);
  const categoriesSet = new Set(['all', ...menu.map((item) => item.category)]);
  const [categories, setCategories] = useState(Array.from(categoriesSet));


  return (
    <article className='menu'>
      <Title />
      <Categories categories={categories} />
      <Menu menu={menu} />
    </article>
  )
}

export default App
