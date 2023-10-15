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

  const onClickHandle = (category) => {
    if (category === 'all') {
      setMenu(data);
      return;
    } else {
      const newMenu = data.filter((item) => { return item.category === category });
      setMenu(newMenu)
    }
  }


  return (
    <article className='menu'>
      <Title />
      <Categories categories={categories} onClickHandle={onClickHandle} />
      <Menu menu={menu} />
    </article>
  )
}

export default App
