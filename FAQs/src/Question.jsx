import { useState } from 'react'
import { IoIosAddCircle, IoIosRemoveCircle } from 'react-icons/io'

const Question = ({ title, info }) => {
  const [isShowed, setIsShowed] = useState(false);

  const onclickHandle = () => {
    setIsShowed(!isShowed);
  }

  return (
    <>
      <div className='banner'>
        <h3>{title}</h3>
        <button type="button" className="btn" onClick={onclickHandle}>
          {isShowed ? <IoIosRemoveCircle /> : <IoIosAddCircle />}
        </button>
      </div>
      {isShowed ? <p>{info}</p> : <></>}
    </>
  )
}

export default Question