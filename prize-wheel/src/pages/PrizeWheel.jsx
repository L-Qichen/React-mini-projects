import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { currentUserContext } from '../App'

const PrizeWheel = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(currentUserContext);
  console.log(currentUser);
  const [isStopped, setIsStopped] = useState(true);
  const [selectedNum, setSelectedNum] = useState(null);
  const [entry, setEntry] = useState(null);
  const [winNum, setWinNum] = useState(0);

  const selectionRange = [1, 2, 3, 4, 5, 6];

  const handleSelectedNum = (number) => {
    setSelectedNum(number);
  };

  // useEffect(() => {
  //   console.log('User Entry:', entry);
  // }, [entry]);

  const calculateSection = (degree) => {
    const section = Math.floor(degree / 60) + 1;
    return section;
  }

  const handleOnClick = () => {
    if (isStopped) {
      const randomRounds = Math.floor(Math.random() * (7 - 3) + 3);
      const randomDeg = Math.floor(Math.random() * (360 - 0) + 0);
      const finalDeg = -(randomRounds * 360 + randomDeg);
      const wheel = document.getElementById("wheel");
      wheel.style.transform = `rotate(${finalDeg}deg)`;
      wheel.style.transition = "transform 3s cubic-bezier(.2,.93,.43,1)";
      setIsStopped(false);

      setTimeout(() => {
        setTimeout(() => {
          wheel.style.transform = "rotate(0deg)";
          wheel.style.transition = "none";
          setIsStopped(true);
        }, 3000);

        const newWinNum = calculateSection(randomDeg);
        setWinNum(newWinNum);
        if (entry !== null && entry === newWinNum) {
          console.log("true");
          alert("You Win!");
        } else {
          console.log("false");
          alert("Try Again.");
        }

        const gameResult = {
          user: currentUser,
          entry: entry,
          winNum: newWinNum,
          isWin: entry === newWinNum ? true : false,
        };

        const gameHistory = JSON.parse(localStorage.getItem("gameHistory")) || [];
        gameHistory.push(gameResult);
        localStorage.setItem("gameHistory", JSON.stringify(gameHistory));
        // setWinNum(calculateSection(randomDeg));
      }, 5000);


      console.log('Selected Numbers:', selectedNum);
      setEntry(selectedNum);
      setSelectedNum(null);
    } else {
      return;
    }
  }

  const handleHistoryClick = () => {
    navigate("/user-result");
  }

  return (
    <div className='main'>
      <div className='container'>
        <h1>Prize Wheel</h1>
        <div className='wheel-screen-container'>
          <div className='screen'>
            <h2>Win Number:</h2>
            <div className='screen-body'>
              <span>{winNum}</span>
            </div>
          </div>

          <div className='out-circle' >
            <div className='in-circle' id='wheel'>

              <div className='first-container'>
                <div className='content-1'>
                  <div>1</div>
                </div>
              </div>
              <div className='second-container'>
                <div className='content-2'>
                  <div>2</div>
                </div>
              </div>
              <div className='third-container'>
                <div className='content-3'>
                  <div>3</div>
                </div>
              </div>
              <div className='fourth-container'>
                <div className='content-4'>
                  <div>4</div>
                </div>
              </div>
              <div className='fifth-container'>
                <div className='content-5'>
                  <div>5</div>
                </div>
              </div>
              <div className='sixth-container'>
                <div className='content-6'>
                  <div>6</div>
                </div>
              </div>

            </div>

            <div className='pointer-body'></div>
            <div className='pointer-head'></div>

          </div>
        </div>

        <div className='footer'>
          <button type='button'
            className='btn'
            onClick={handleOnClick}
          >
            Start!
          </button>
          <div className="number-list">
            {[...selectionRange].map(
              (number) => {
                return (
                  <button
                    key={number}
                    className={selectedNum === number ? 'num-btn selected' : 'num-btn'}
                    onClick={() => handleSelectedNum(number)}
                  >
                    {number}
                  </button>
                );
              }
            )}
          </div>
          <button type='button'
            className='btn'
            onClick={handleHistoryClick}
          >
            History
          </button>
        </div>
      </div>

    </div>
  )
}

export default PrizeWheel;