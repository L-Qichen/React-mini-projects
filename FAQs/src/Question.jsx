import { useState } from 'react'
import { IoIosAddCircle } from 'react-icons/io'

const Question = ({ title, info }) => {
  const [isShowed, setIsShowed] = useState(false);

  const onclickHandle = () => {
    setIsShowed(!isShowed);
  }

  return (
    <>
      <h3>{title}</h3>
      <button type="button" className="btn" onClick={onclickHandle}>
        <IoIosAddCircle />
      </button>
      {isShowed ?
        <p>{info}</p> :
        <></>
      }
    </>
  )
}

export default Question