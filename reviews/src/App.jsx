import { useState } from 'react'
import data from "./data"
import './style.css'
import { BiSolidQuoteRight } from 'react-icons/bi';

function App() {
  const [index, setIndex] = useState(0);
  const { id, image, job, name, text } = data[index];

  return (
    <>
      <div className='container'>
        <h1 className='header' style={{ marginBottom: '3rem' }}>Reviews</h1>
        <div className='card'>
          <div className='avatar'>
            <img src={image} alt={name} />
            <BiSolidQuoteRight className='quote' />
          </div>
          <h3 className='name'>{name}</h3>
          <h5 className='title'>{job}</h5>
          <p className='info'>{text}</p>
          <div>
            <button>left</button>
            <button>right</button>
          </div>
          <button>surprise me</button>
        </div>
      </div >
    </>
  )
}

export default App
