import { useState } from 'react'

const Form = ({ addItem }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addItem(name);
    setName('');
  }

  return (
    <>
      <h4 className='todo-header'>To Do List</h4>
      <form className="todo-form">
        <input type="text"
          className="todo-input"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button type="submit"
          className="todo-btn"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </>
  )
}

export default Form;