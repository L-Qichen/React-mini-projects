import { useState } from 'react'
import './App.css'
import data from './data'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [paragraphs, setParagraphs] = useState(1);
  const [content, setContent] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(paragraphs);
    setContent(data.slice(0, amount));
  }

  return (
    <section className='main'>
      <h4 className='title'>Lorem Ipsum Generator</h4>
      <form className='lorem-ipsum'>
        <label htmlFor='amount'>paragraphs: </label>
        <input type='number'
          name='amount'
          id='amount'
          value={paragraphs}
          onChange={e => setParagraphs(e.target.value)}
          min='1'
          step='1'
          max='8'
        />
        <button type='submit'
          className='btn'
          onClick={handleSubmit}
        >
          Generate
        </button>
      </form>
      <article>
        {content.map((paragraph) => {
          const id = uuidv4();
          return (
            <p key={id}>{paragraph}</p>
          )
        })}
      </article>
    </section>
  )
}

export default App;
