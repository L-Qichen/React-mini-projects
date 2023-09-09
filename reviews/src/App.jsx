import { useState } from 'react'
import data from "./data"
import './style.css'

function App() {
  const [index, setIndex] = useState(0);
  const { id, image, job, name, text } = data[index];

  return (
    <>
      <div>
        <h1>Reviews</h1>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <h5>{job}</h5>
        <p>{text}</p>
        <div>
          <button>left</button>
          <button>right</button>
        </div>
        <button>surprise me</button>
      </div>
    </>
  )
}

export default App
