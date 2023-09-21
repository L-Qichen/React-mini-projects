import { useState } from 'react'
import data from './data'
import List from './List'

import './style.css'

function App() {
  const [questions, setQuestions] = useState(data);
  console.log(questions);

  return (
    <>
      <List questions={questions} />
    </>
  )
}

export default App
