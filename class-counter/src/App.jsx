import { useState } from "react"
import ClassContainer from "./ClassCounter"
import { FunctionCounter } from "./FunctionCounter"
import Registration from "./Registration"
import './App.css'

function App() {
  const [isToggle, setIsToggle] = useState(true);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  }

  return (
    <>
      <button type="button" onClick={handleToggle}
        style={{
          display: "block",
          margin: "2rem auto"
        }}
        className="btn">toggle</button >
      {isToggle ? <></> :
        <>
          <ClassContainer />
          <FunctionCounter />
          <Registration />
        </>
      }

    </>
  )
}

export default App
