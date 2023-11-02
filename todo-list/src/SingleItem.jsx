import { useState } from 'react'

const SingleItem = ({ item, removeItem, editItem }) => {

  return (
    <div className="todo-list-container">
      <input type="checkbox"
        className="todo-checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p className="todo-name"
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through'
        }}
      >
        {item.name}
      </p>
      <button type="button"
        className='btn'
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div >
  )
}

export default SingleItem;