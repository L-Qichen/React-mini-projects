import { useState } from 'react'
import data from "./data"
import './style.css'
import { BiSolidQuoteRight, BiChevronLeft, BiChevronRight } from 'react-icons/bi';

function App() {
  const [index, setIndex] = useState(0);
  const { id, image, job, name, text } = data[index];

  const leftButtonClick = () => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  const rightButtonClick = () => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  const surpriseClick = () => {
    let randomNum = Math.floor(Math.random() * (data.length));
    if (randomNum === index) {
      randomNum += 1;
    }
    const newIndex = randomNum % data.length;
    setIndex(newIndex);
  }

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
          <div className='l-r-buttons-container'>
            <button className='l-button' onClick={leftButtonClick}>
              <BiChevronLeft />
            </button>
            <button className='r-button' onClick={rightButtonClick}>
              <BiChevronRight />
            </button>
          </div>
          <div className='btn-container'>
            <button className='btn' onClick={surpriseClick}>surprise me</button>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
