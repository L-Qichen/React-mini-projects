import { useState } from 'react'

const SingleItem = ({ item }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="todo-list-container">
      <input type="checkbox"
        className="todo-checkbox"
        checked={isChecked}
        onChange={e => setIsChecked(!isChecked)}
      />
      <p className="todo-name"
        style={{
          textTransform: 'capitalize',
          textDecoration: isChecked && 'line-through'
        }}
      >
        {item.name}
      </p>
      <button type="button" className='btn'>delete</button>
    </div >
  )
}

export default SingleItem;