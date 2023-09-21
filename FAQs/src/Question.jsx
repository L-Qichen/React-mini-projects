import { useState } from 'react'

const Question = ({ title, info }) => {
  const [isShowed, setIsShowed] = useState(false);

  const onclickHandle = () => {
    setIsShowed(!isShowed);
  }

  return (
    <>
      <h3>{title}</h3>
      <button type="button" className="btn" onClick={onclickHandle}>
        show more info
      </button>
      {isShowed ?
        <p>{info}</p> :
        <></>
      }
    </>
  )
}

export default Question